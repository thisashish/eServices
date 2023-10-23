import { Router } from "express";
import category from "../../models/categorySchema.js";
const router = Router();

router.get("/all", async (req, res) => {
  const founddata = await category.find();
  res.send(founddata);
});

export default router;
