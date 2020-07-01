import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router/userRouter";
import { globalRouter } from "./router/globalRouter";
import { videoRouter } from "./router/videoRouter";
import routes from "./routes";
import { handleMiddleware } from "./globalMiddleware";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(handleMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);

export default app;
