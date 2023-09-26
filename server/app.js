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

app.get('/api/airconditioner', (req, res) => {
  // Handle the request for Airconditioner data
  // Example: You can query a database or serve JSON data
  const airconditionerData = { name: 'Airconditioner', description: 'Category for Airconditioner' };
  res.json(airconditionerData);
});

app.get('/api/aircooler', (req, res) => {
  // Handle the request for Aircooler data
  // Example: You can query a database or serve JSON data
  const aircoolerData = { name: 'Aircooler', description: 'Category for Aircooler' };
  res.json(aircoolerData);
});

app.get('/api/fridge', (req, res) => {
  // Handle the request for Fridge data
  // Example: You can query a database or serve JSON data
  const fridgeData = { name: 'Fridge', description: 'Category for Fridge' };
  res.json(fridgeData);
});



// app.post("/", (req,res)=>{console.log(req.body)})
app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})

