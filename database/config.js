const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {});
    console.log("db online");
  } catch (error) {
    console.log(error);
    throw new Error("Can't connect to DB");
  }
};

module.exports = {
  dbConnection,
};
