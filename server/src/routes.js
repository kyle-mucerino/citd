const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { subscribeUser } = require("./controllers");

router.post(
  "/subscribe",
  [check("email", "Please include a valid email").isEmail()],
  subscribeUser
);

module.exports = router;
