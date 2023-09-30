import { Router } from "express";
import multer, { diskStorage } from "multer";
import category from "../../models/categorySchema.js";
const router = Router();
const storage = diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Initialize the multer middleware with the storage engine
const upload = multer({ storage, limits: { fileSize: 5000 * 1024 * 1024 } });

router.post("/category", upload.single("img"), async (req, res) => {
  const res1 = await category.insertMany([
    {
      name: req.body.name,
      img: req.file.path,
      locations: req.body.locations,
    },
  ]);
  console.log(res1);
});

export default router;
