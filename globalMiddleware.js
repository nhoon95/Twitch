import routes from "./routes";
import multer from "multer";

const videoMulter = multer({ dest: "uploads/video/" });
const userImageMulter = multer({ dest: "uploads/image/" });

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  console.log(req.user);
  next();
};

export const multerVideo = videoMulter.fields([
  { name: "videoFile", maxCount: 10 },
  { name: "imageFile", maxCount: 10 },
]);

export const multerImage = userImageMulter.single("avatar");
