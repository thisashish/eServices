import { Router } from "express";
import { Login, OtpSend, Register } from "./UControllers/auth";
const router = Router();

//auth routes
router.post("/auth/register", Register);
router.post("/auth/login", Login);
router.get("/auth/otpsend", OtpSend);

export default router;
