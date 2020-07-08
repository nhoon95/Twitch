import express from "express";
import routes from "../routes";
import {
  home,
  login,
  logout,
  join,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
} from "../controllers/userController";
import { search } from "../controllers/videoController";

export const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.logOut, logout);
