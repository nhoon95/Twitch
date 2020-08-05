import routes from "./routes";
import multer from "multer";

const videoMulter = multer({ dest: "uploads/video/" });

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  res.locals.images = next();
  console.log(req.user);
};

export const multerVideo = videoMulter.fields([
  { name: "videoFile", maxCount: 10 },
  { name: "imageFile", maxCount: 10 },
]);
