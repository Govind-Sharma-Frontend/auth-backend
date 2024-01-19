const httpStatus = require("http-status");
const { userService, tokenService } = require("../services");
// const message = require('../../utils/message');

const loginController = async (req, res) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    const access = await tokenService.generateAccessToke(user._id);
    const refresh = await tokenService.generateRefreshToke(user._id);

    res.status(201).send({
      code: httpStatus.CREATED,
      status: true,
      message: "login successfully",
      data: { result: { user, tokens: { access, refresh } } },
    });
  } catch (error) {
    res.status(406).send({
      code: httpStatus.NOT_ACCEPTABLE,
      status: false,
      message: "login failed",
      data: null,
      error: error.message,
    });
  }
};

module.exports = { loginController };
