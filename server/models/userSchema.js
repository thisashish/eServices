import { Schema, model } from "mongoose";

import validator from "validator";

const isEmail = validator.isEmail;

// Now you can use isEmail as before


import pkg from "bcryptjs";
const { hash } = pkg;
import pkg2 from 'jsonwebtoken';
const { sign } = pkg2;
const SECRECT_KEY = "abcdefghijklmnop";

const userSchema = new Schema({
  uid: {
    type: String,
    unique: true, // Ensure each user has a unique UID
    required: true,
  },
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

// hash password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await hash(this.password, 12);
  }

  next();
});

// token generate
userSchema.methods.generateAuthtoken = async function () {
  try {
    let newtoken = sign({ _id: this._id }, SECRECT_KEY, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (error) {
    res.status(400).json(error);
  }
};

// creating model
const users = new model("users", userSchema);

export default users;
