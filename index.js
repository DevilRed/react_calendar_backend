const express = require("express");
require("dotenv").config();

const app = express();

// expose public directory
app.use(express.static("public"));

// read, parse body
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'))
// TODO CRUD: events
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
