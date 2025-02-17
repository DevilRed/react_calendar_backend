/**
 * route prefix: /api/auth
 */

const express = require("express");
const router = express.Router();
const { userAdd, userLogin, tokenRenew } = require("../controllers/auth");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/field-validator");
const { validateJWT } = require("../middlewares/validate-jwt");

router.post(
  "/new",
  [
    // middlewares
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check(
      "password",
      "password is required and must have 6 characters length"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  userAdd
);

router.post(
  "/",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
    validateFields,
  ],
  userLogin
);

router.get("/renew", validateJWT, tokenRenew);

module.exports = router;
