const userModel = require(`../../model/user`);

module.exports = async (req, res) => {
  try {
    const name = req.query.name;
    const users = await userModel.find({ username: { $in: name } });
    res.status(200).json({ "all users": users });
  } catch (error) {
    res.status(500).json({ message: "catch error in get all user" });
  }
};
