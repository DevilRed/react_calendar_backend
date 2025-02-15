/**
 * route prefix: /api/auth
 */

const express = require("express");
const router = express.Router();
const { userAdd, userLogin, tokenRenew } = require("../controllers/auth");

router.post("/new", userAdd);

router.post("/", userLogin);

router.get("/renew", tokenRenew);

module.exports = router;
