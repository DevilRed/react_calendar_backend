const express = require("express");
require("dotenv").config();

const app = express();

// expose public directory
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
