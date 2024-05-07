const mongoose = require("mongoose");

async function DBconnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/TodoApi");
    console.log("DB connection succesfull");
  } catch (err) {
    console.error("error", err);
  }
}

module.exports = DBconnection;
