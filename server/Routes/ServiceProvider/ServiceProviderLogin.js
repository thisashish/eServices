import { Router } from "express";
const router = Router();

router.post("/data", async (req, res) => {
  console.log(req.cookie);
});
export default router;
