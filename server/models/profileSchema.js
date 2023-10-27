import { Schema, model } from "mongoose";
import validator from "validator";

const profileSchema = new Schema({
  name:{
type:String,
  },
  img: {
    type: String,
    require: false,
  },
  
});

// category otp model
const profile = new model("profiles", profileSchema);

export default profile;
