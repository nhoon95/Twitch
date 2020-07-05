import express from "express";
import routes from "../routes";
import {
  user,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";
export const userRouter = express.Router();

userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);
