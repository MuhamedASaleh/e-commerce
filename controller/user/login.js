
const { validationResult } = require(`express-validator`);
const userModel = require(`../../model/user`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const signInError = validationResult(req);
    if (signInError.isEmpty()){
      const user = await userModel.findOne({ email });
      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          const token = jwt.sign(
            { name: user.username, id: user._id, role: user.isAdmin },
            `shhhh`,
            { expiresIn: `1h` }
          );
          const{ password , ...other} = user._doc
          res.status(200).json({ message: "login approved",...other,token});
        } else {
          res.status(500).json({ message: "invalid email or password" });
        }
      } else {
        res.status(500).json({ message: "please signup first" });
      }
    }else{
      res.status(500).json({
        message: "error in login validation",
        error: loginError.array(),
      });
    }
  }catch (error) {
    res.status(500).json({ message: "catch error in login"});
  }
}


