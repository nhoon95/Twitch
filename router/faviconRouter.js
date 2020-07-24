import express from "express";
import routes from "../routes";
import { favicon } from "../controllers/userController";
import { search } from "../controllers/videoController";

export const faviconRouter = express.Router();

faviconRouter.get(routes.favicon, favicon);
