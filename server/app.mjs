import { config } from "dotenv";
config();
import cookies from "cookie-parser";
import express from "express";
import { json } from "express";
import path from "path";
const app = express();
import Adminuploads from "./Routes/Admin/Adminupload.js";
import authRoutes from "./Routes/authRoutes.js";
import category from "./models/categorySchema.js";

import cors from "cors";
import "./db/conn.js";
import router from "./Routes/router.js";
const PORT = 4001;
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import CategoryFind from "./Routes/Category/CategoryFind.js";
import CategoryDelete from "./Routes/Category/CategoryDelete.js";
import ServiceProviderAdd from "./Routes/ServiceProvider/ServiceProviderAdd.js";
import ServiceProviderLogin from "./Routes/ServiceProvider/ServiceProviderLogin.js";
import ServiceProviderFind from "./Routes/ServiceProvider/ServiceProviderFind.js"
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(json());
app.use(cors());
app.use(router);
app.use(cookies());

app.use("/auth", authRoutes);
app.use("/admin/add", Adminuploads);
app.use("/category/find", CategoryFind);
app.use("/category/delete", CategoryDelete);
app.use("/serviceprovider/add", ServiceProviderAdd);
app.use("/serviceprovider/login", ServiceProviderLogin);
app.use("/serviceprovider/find", ServiceProviderFind);

app.get("/category", async (req, res) => {
  res.send(await category.find());
});

app.listen(PORT, () => {
  console.log(`Server start at Port No :${process.env.PORT}`);
});
