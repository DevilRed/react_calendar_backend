const userAdd = (req, res) => {
  // get params from req.body
  const { name, email, password } = req.body;

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
