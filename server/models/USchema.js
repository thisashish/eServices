import { Schema, model } from "mongoose";
import validator from "validator";
const isEmail = validator.isEmail;
import pkg from "bcryptjs";
const { hash } = pkg;
import pkg2 from "jsonwebtoken";
const { sign } = pkg2;

const USchema = new Schema({
  uid: {
    type: String,
    unique: true, // Ensure each user has a unique UID
    required: true,
  },
  profilephoto: { type: String },
  fname: {
    type: String,
    required: true,
    trim: true,
  },
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
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// creating model
const Us = new model("Us", USchema);

export default Us;
