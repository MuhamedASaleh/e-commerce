const userModel = require(`../../model/user`);
const { validationResult } = require(`express-validator`);
const bcrypt = require(`bcryptjs`);

module.exports = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const signUpError = validationResult(req);
    if (signUpError.isEmpty()) {
      const Name = await userModel.findOne({ username });
      if (Name) {
        res
          .status(500)
          .json({ message: "user name already exist try another one" });
      } else {
        const Email = await userModel.findOne({ email });
        if (Email) {
          res
            .status(500)
            .json({ message: "email already exist try another one" });
        } else {
          await bcrypt.hash(password, 12, async (err, hash) => {
            if (err) {
              res.status(500).json({ message: "error in hashing password" });
            } else {
              await userModel.insertMany({ username, email, password: hash });
              res.status(201).json({ message: "one user added" });
            }
          });
        }
      }
    } else {
      res.status(500).json({
        message: "error in register",
        validationError: registerError.array(),
      });
    }
  } catch (error) {
    res.status(500).json({ message: "catch error on register" });
  }
};
