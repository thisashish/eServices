import { Schema, model } from "mongoose";

const SPSchema = new Schema({
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

const SP = model("serviceproviders", SPSchema);

export default SP;
