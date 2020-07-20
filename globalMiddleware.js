import routes from "./routes";
import multer from "multer";

const videoMulter = multer({ dest: "uploads/video/" });
const imageMulter = multer({ dest: "uploads/image/" });

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAthenticated: true,
    id: 1,
  };
  next();
};

export const multerVideo = videoMulter.single("videoFile");
export const multerImage = imageMulter.single("imgFile");
