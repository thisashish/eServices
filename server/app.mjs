import { config } from "dotenv";
config();
import express from "express";
import { json } from "express";
import path from "path";
const app = express();
import Adminuploads from "./Routes/Admin/Adminupload.js"
;
import authRoutes from "./Routes/authRoutes.js";
import category from "./models/categorySchema.js";
// import profile from "./models/profileSchema.js"


import cors from "cors";
import "./db/conn.js";
import router from "./Routes/router.js";
const PORT = 4001 ;
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import CategoryFind from "./Routes/Category/CategoryFind.js";
import CategoryDelete from "./Routes/Category/CategoryDelete.js";
// import ProfileFind from "./Routes/Profile/ProfileFind.js";
import ServiceProviderAdd from "./Routes/ServiceProvider/ServiceProviderAdd.js";
import ServiceProviderDashboard from "./Routes/ServiceProvider/ServiceProviderDashboard.js";

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(json());
app.use(cors());
app.use(router);

app.use("/auth", authRoutes);
app.use("/admin/add", Adminuploads);
app.use("/service/provider",ServiceProviderDashboard);
app.use("/category/find", CategoryFind);
app.use("/category/delete", CategoryDelete);
app.use("/profile/find",CategoryFind);
app.use("/serviceprovider/add", ServiceProviderAdd);


app.get("/category", async (req, res) => {
  res.send(await category.find());
});

app.get("/profile",async(req,res)=>{
  res.send(await category.find());
});

app.listen(PORT, () => {
  console.log(`Server start at Port No :${process.env.PORT}`);
});
