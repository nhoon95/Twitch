import express from "express";
import routes from "../routes";
import { home, login, logout, join } from "../controllers/userController";
import { search } from "../controllers/videoController";

export const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logOut, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
