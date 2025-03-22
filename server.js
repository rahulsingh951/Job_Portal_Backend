import app from "./app.js";
import { v2 as cloudinary } from "cloudinary"; // Correct import for cloudinary v2
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at port ${PORT}`);
});
