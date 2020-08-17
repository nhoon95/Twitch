import express from "express";
import routes from "../routes";
import { postAddComment } from "../controllers/videoController";

export const apiRouter = express.Router();

apiRouter.post(routes.comment, postAddComment);
