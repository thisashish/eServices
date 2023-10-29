//imports

////pkg
import { config } from "dotenv";
import cookies from "cookie-parser";
import express from "express";
import { json } from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

////file
import CRoutes from "./Routes/C/CRoutes.js";
import URoutes from "./Routes/User/URoutes.js";
import category from "./models/CSchema.js";
import router from "./Routes/router.js";
import "./config/conn.js";
import CFind from "./Routes/C/Controllers/CFind.js";
import CDelete from "./Routes/C/Controllers/CDelete.js";
import SPAdd from "./Routes/SP/SPAdd.js";
import SPDashboard from "./Routes/SP/SPDashboard.js";
import SPLogin from "./Routes/SP/SPLogin.js";
import SPFind from "./Routes/SP/SPFind.js";

//use

////pkg
config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import CategoryFind from "./Routes/Category/CategoryFind.js";
import CategoryDelete from "./Routes/Category/CategoryDelete.js";
// import ProfileFind from "./Routes/Profile/ProfileFind.js";
import ServiceProviderAdd from "./Routes/ServiceProvider/ServiceProviderAdd.js";

import ServiceProviderDashboard from "./Routes/ServiceProvider/ServiceProviderDashboard.js";


import ServiceProviderLogin from "./Routes/ServiceProvider/ServiceProviderLogin.js";
import ServiceProviderFind from "./Routes/ServiceProvider/ServiceProviderFind.js"


app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(json());
app.use(cors());
app.use(router);
app.use(cookies());

////routes
app.use("/U", URoutes);
app.use("/C", CRoutes);
app.use("/service/provider", SPDashboard);
app.use("/C/find", CFind);
app.use("/C/delete", CDelete);
app.use("/profile/find", CFind);
app.use("/SP/add", SPAdd);
app.use("/SP/login", SPLogin);
app.use("/SP/find", SPFind);
app.get("/C", async (req, res) => {
  res.send(await category.find());
});
app.get("/profile", async (req, res) => {
  res.send(await category.find());
});

//server
app.listen(process.env.PORT, () => {
  console.log(`Server start at Port No :${process.env.PORT}`);
});

export default app;



