import { Router } from "express";
import serviceprovider from "../../models/serviceproviderSchema.js";
const router = Router();

router.get("/all", async (req, res) => {
  const founddata = await serviceprovider.find();
  console.log(founddata);
  res.send(founddata);
});

export default router;
