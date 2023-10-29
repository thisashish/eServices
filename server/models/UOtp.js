import { Schema, model } from "mongoose";
import pkg from "validator";
const { isEmail } = pkg;

const userOtpSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!isEmail(value)) {
        throw new Error("Not Valid Email");
      }
    },
  },
  otp: {
    type: String,
    required: true,
  },
});

// user otp model
const userotp = new model("userotps", userOtpSchema);

export default userotp;
