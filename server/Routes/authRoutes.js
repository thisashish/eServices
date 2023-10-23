import { Router } from "express";
const router = Router();
import { signup, login, logout } from "../controllers/authController.js";
import ServiceProviderLogin from "./ServiceProvider/ServiceProviderLogin.js"

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.post("/serviceprovider",ServiceProviderLogin )


export default router;
