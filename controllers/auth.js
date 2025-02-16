const User = require("../models/User");

const userAdd = async (req, res) => {
  try {
    // get params from req.body
    const user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please talk with administrator",
    });
  }
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
