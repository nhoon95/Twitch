import routes from "./routes";
import multer from "multer";

const videoMulter = multer({ dest: "uploads/video/" });

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAthenticated: true,
    id: 1,
  };
  next();
};

export const multerVideo = videoMulter.fields([
  { name: "videoFile", maxCount: 10 },
  { name: "imageFile", maxCount: 10 },
]);
