const { Router } = require("express");
const multer = require("multer");
const category = require("../../models/categorySchema");
const router = Router();
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Initialize the multer middleware with the storage engine
const upload = multer({ storage, limits: { fileSize: 5000 * 1024 * 1024 } });

router.post("/category", upload.single("img"), async (req, res) => {
  const res1 = await category.insertMany([{
    name: req.body.name,
    img: req.file.path,
    locations: req.body.locations,
  }]);
  console.log(res1);
});

module.exports = router;
