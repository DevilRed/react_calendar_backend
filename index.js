const express = require("express");

const app = express();

// routes
app.get("/", (req, res) => {
  res.json({
    ok: true,
  });
});
app.listen(4000, () => {
  console.log("server running on port 4000");
});
