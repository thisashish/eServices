require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4001;
const path = require("path");
const CategoryFind = require("./Routes/Category/CategoryFind");
const CategoryDelete = require("./Routes/Category/CategoryDelete");
// middleware
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cors());
app.use(router);

// const admin = require("firebase-admin");
// const serviceAccount = require("./config/serviceAccountKey.json"); // Firebase Admin SDK key
const Adminuploads = require("./Routes/Admin/Adminupload");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://clone-b83c8-default-rtdb.firebaseio.com/",
// });

const authRoutes = require("./Routes/authRoutes");
const category = require("./models/categorySchema");

app.use("/auth", authRoutes);
app.use("/admin/add", Adminuploads);
app.use("/category/find", CategoryFind);
app.use("/category/delete", CategoryDelete);
app.use;
app.get("/category", async (req, res) => {
  res.send(category.find());
});

app.listen(PORT, () => {
  console.log(`Server start at Port No :${process.env.PORT}`);
});
