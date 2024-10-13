import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error('Cloudinary environment variables are not set');
  process.exit(1); // Exit the app if necessary environment variables are missing
}

const port = process.env.PORT || 4000;


app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at ${process.env.FRONTEND_URL}`);
});



