import { Router } from "express";
const router = new Router();
import {
  userregister,
  userLogin,
  userOtpSend,
} from "../controllers/userControllers.js";

// Routes
router.post("/user/register", userregister);
router.post("/user/login", userLogin);
router.post("/user/sendotp", userOtpSend);

export default router;
