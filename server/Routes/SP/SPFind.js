import { Router } from "express";
import SP from "../../models/SPSchema.js";
const router = Router();

router.get("/all", async (req, res) => {
  const founddata = await SP.find();
  console.log(founddata);
  res.send(founddata);
});

export default router;
