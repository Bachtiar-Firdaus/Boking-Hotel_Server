const router = require("express").Router();
const multer = require("multer");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const authController = require("./controller");

passport.use(
  new localStrategy({ usernameField: "email" }, authController.localStrategy)
);

module.exports = router;
