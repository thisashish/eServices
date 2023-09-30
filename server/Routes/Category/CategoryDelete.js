import { Router } from "express";
import category from "../../models/categorySchema.js";
const router = Router();

router.post("/one/byid", async (req, res) => {
  console.log(req.body);
  const deletecat = await category.deleteOne({ _id: req.body.id });
  res.status(200).send("Success");
});

export default router;
