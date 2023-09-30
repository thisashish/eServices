import { Schema, model } from "mongoose";

const serviceproviderSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  phoneno: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  token: { type: String, required: true },
  locations: [{ type: String }],
  categories: [{ type: String }],
  review: [
    {
      userid: String,
      review: String,
      rating: Number,
    },
  ],
  transactions: [{ type: String, amount: Number }],
});

const serviceprovider = model(
  "serviceproviders",
  serviceproviderSchema
);

export default serviceprovider;
