import express from "express";
import routes from "../routes";
import {
  user,
  userDetail,
  editProfile,
  changePassword,
  getEditProfile,
  postEditProfile,
  getMe,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController";
import { multerImage } from "../globalMiddleware";
export const userRouter = express.Router();

userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, multerImage, postEditProfile);
userRouter.get(routes.changePassword, getChangePassword);
userRouter.post(routes.changePassword, postChangePassword);
userRouter.get(routes.userDetail(), userDetail);
userRouter.get(routes.me, getMe);
