const router = require("express").Router();
const { auth } = require("../controllers");

router.post("/login", auth.loginController);

module.exports = router;
