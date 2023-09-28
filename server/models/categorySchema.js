const mongoose = require("mongoose");
const validator = require("validator");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  locations: [{ type: String }],
});

// category otp model
const category = new mongoose.model("categorys", categorySchema);

module.exports = category;