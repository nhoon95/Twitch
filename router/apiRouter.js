import express from "express";
import routes from "../routes";
import { postView } from "../controllers/videoController";

export const apiRouter = express.Router();

apiRouter.get(routes.view, postView);
