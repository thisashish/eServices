require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4001;

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
app.use("/auth", authRoutes)

app.get('/:location/:category', (req, res) => {
  const location = req.params.location;
  const category = req.params.category;

  // Handle the request and serve content based on the location and category
  // Example: You can query a database or serve dynamic content
  const content = `You selected location: ${location} and category: ${category}`;
  res.send(content);
});

app.get('/:location', (req, res) => {
  const location = req.params.location;

  // Handle the request and serve content based on the location
  // Example: You can query a database or serve dynamic content
  const content = `You selected location: ${location}`;
  res.send(content);
});

// app.post("/", (req,res)=>{console.log(req.body)})
app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})

