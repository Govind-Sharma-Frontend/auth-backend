const jwt = require("jsonwebtoken");
const moment = require("moment");

const generateToke = async (userId, type, expiresIn) => {
  // generate jwt token and return
  const payload = {
    sub: userId,
    type,
    exp: expiresIn.unix(),
  };
  const secretKey = "from-env"; // Replace this with your actual secret key

  //   const options = {
  //     expiresIn: expiresIn, // Token expiration time (e.g., 1 hour)
  //   };

  const token = jwt.sign(payload, secretKey);
  return token;
};
const saveToken = async () => {
  // save token into database
};

const verifyToken = async () => {
  //verify from jwt
};

const generateAccessToke = async (userID) => {
  // generate access token and
  const expires = moment().add(30, "minutes");
  const token = await generateToke(userID, "access", expires);

  return { token, expires };
};

const generateRefreshToke = async (userID) => {
  const expires = moment().add(30, "days");
  const token = await generateToke(userID, "refresh", expires);

  return { token, expires };
};

const removeTokes = async () => {};

module.exports = {
  generateToke,
  saveToken,
  verifyToken,
  generateAccessToke,
  generateRefreshToke,
  removeTokes,
};
