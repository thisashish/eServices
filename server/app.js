require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('./db/conn');
const router = require('./Routes/router');
const PORT = 4001;

// middleware
app.use(express.json());
app.use(cors());
app.use(router);

const authRoutes = require('./Routes/authRoutes');
app.use('/auth', authRoutes);

// app.post("/", (req,res)=>{console.log(req.body)})
app.listen(PORT, () => {
  console.log(`Server start at Port No :${PORT}`);
});
