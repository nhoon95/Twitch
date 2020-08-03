import express from "express";
import routes from "../routes";
import passport from "passport";
import {
  home,
  logout,
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  githubLogin,
  goToHome,
} from "../controllers/userController";
import { search } from "../controllers/videoController";

export const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);

globalRouter.get(routes.search, search);

globalRouter.get(routes.logOut, logout);

//깃허브

globalRouter.get(routes.github, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  goToHome
);
