require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");

const admin = require("firebase-admin");
const serviceAccount = require("./config/serviceAccountKey.json"); // Firebase Admin SDK key

// middleware
app.use(express.json());
app.use(cors());
app.use(router);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://clone-b83c8-default-rtdb.firebaseio.com/",
});

const authRoutes = require("./Routes/authRoutes");
app.use("/auth", authRoutes);

// app.post("/", (req,res)=>{console.log(req.body)})
app.listen(PORT, () => {
  console.log(`Server start at Port No :${process.env.PORT}`);
});
