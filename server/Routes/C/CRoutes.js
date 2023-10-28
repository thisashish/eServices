import { Router } from "express";
import { Login, OtpSend, Register } from "./userControllers/auth";
const router = Router();

//auth routes
router.post("/add", CategoryAdd);

export default router;
