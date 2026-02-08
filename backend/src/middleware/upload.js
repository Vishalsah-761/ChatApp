import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "chatify/profile-pictures",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 300, height: 300, crop: "fill" }],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
});

export default upload;