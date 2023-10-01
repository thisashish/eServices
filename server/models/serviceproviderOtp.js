import { Schema, model } from "mongoose";

const serviceproviderOtpSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  otp: {
    type: Number,
    require: true,
  },
});

// user otp model
const serviceproviderOtp = new model(
  "serviceproviderOtps",
  serviceproviderOtpSchema
);

export default serviceproviderOtp;
