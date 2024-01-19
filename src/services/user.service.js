const { User } = require("../models/index");

const login = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("No user found");
  }
  if (user.password !== password) {
    throw new Error("Invalid values");
  }
  return user;
};


module.exports = { login }