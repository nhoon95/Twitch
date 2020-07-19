import routes from "./routes";
import multer from "multer";

const multerSetting = multer({ dest: "uploads/video/" });

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAthenticated: true,
    id: 1,
  };
  next();
};

export const middleMulter = multerSetting.single("videoFile");
