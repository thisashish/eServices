import { connect } from "mongoose";
import dotenv from "dotenv"; // Import the dotenv package

dotenv.config(); // Call the config function
const DB = process.env.DATABASE;

connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log("error", error);
  });
