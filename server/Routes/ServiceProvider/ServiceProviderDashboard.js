import { Router } from "express";
import multer, { diskStorage } from "multer";
import users from "../../models/userSchema";
const router = Router();
const storage = diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Initialize the multer middleware with the storage engine
const upload = multer({ storage, limits: { fileSize: 5000 * 1024 * 1024 } });

router.post("/profile", upload.single("img"), async (req, res) => {
  console.log(req);
  const res1 = await users.updateOne([
    {
      name: req.body.name,
      img: req.file.path,
      locations: req.body.locations,
    },
  ]);
  res.redirect("/service-provider/dashboard");
});

export default router;
