import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";

import { multerUpload } from "./utils/multer";
import { cloudinaryInstance } from "./services/cloudinary";

export const app: Application = express();

app.use(helmet());

app.use(express.json());

app.use(cors({ origin: "your client url" }));

// Expose an API to upload the image

app.post("/", multerUpload.single("save__to__cloudinary"), async (req, res) => {
  const localFilePath = req.file?.path || "";

  const { isSuccess, message, statusCode, imageURL } =
    await cloudinaryInstance.uploadImage(localFilePath);

  return res.status(statusCode).json({
    isSuccess,
    message,
    imageURL,
  });
});
