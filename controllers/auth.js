const User = require("../models/User");

const userAdd = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "User already exists",
      });
    }
    user = new User(req.body);
    await user.save();

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
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
