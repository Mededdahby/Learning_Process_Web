const User = require("../module/User");

async function getOneUser(req, res) {
  try {
    let user = await User.find({ });
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
}

async function getUsers(req, res) {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
}




module.exports = {
  getOneUser,
  getUsers
};
