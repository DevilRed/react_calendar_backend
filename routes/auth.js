/**
 * route prefix: /api/auth
 */

const express = require("express");
const router = express.Router();
const { userAdd, userLogin, tokenRenew } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/new",
  [
    // middlewares
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check("password", "password is required abd must have 6 characters length")
      .not()
      .isLength({ min: 6 }),
  ],
  userAdd
);

router.post("/", userLogin);

router.get("/renew", tokenRenew);

module.exports = router;
