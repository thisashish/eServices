import { Schema, model } from "mongoose";

const CSchema = new Schema({
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
const C = new model("Cs", CSchema);


// module.exports = category;
export default category;



export default C;

