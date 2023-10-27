import { Schema, model } from "mongoose";
import validator from "validator";

 const categorySchema = new Schema({
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
const category = new model("categorys", categorySchema);

export default category;
