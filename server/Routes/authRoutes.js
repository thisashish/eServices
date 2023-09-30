import { Router } from "express";
const router = Router();
import { signup, login, logout } from "../controllers/authController.js";

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);


export default router;
