const { Router } = require("express");
const category = require("../../models/categorySchema");
const router = Router();

router.get("/all", async (req, res) => {
  const founddata = await category.find();
  console.log(founddata);
  res.send(founddata);
});

module.exports = router;
