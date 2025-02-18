const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");
const cors = require("cors");

const app = express();
// db connection
dbConnection();

app.use(cors());
// expose public directory
app.use(express.static("public"));

// read, parse body
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'))
app.use("/api/events", require("./routes/events"));

// TODO CRUD: events
app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
