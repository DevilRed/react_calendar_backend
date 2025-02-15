const { validationResult } = require("express-validator");

const userAdd = (req, res) => {
  // get params from req.body
  const { name, email, password } = req.body;

  // validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      // errors serialized
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
  });
};

const userLogin = (req, res) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
  });
};

const tokenRenew = (req, res) => {
  res.json({
    ok: true,
  });
};

module.exports = {
  userAdd,
  userLogin,
  tokenRenew,
};
