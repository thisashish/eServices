const { Router } = require("express");
const category = require("../../models/categorySchema");
const router = Router();

router.post("/one/byid", async (req, res) => {
  console.log(req.body);
  const deletecat = await category.deleteOne({ _id: req.body.id });
  res.status(200).send("Success");
});

module.exports = router;
