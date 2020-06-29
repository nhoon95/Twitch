import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router/userRouter";
import { globalRouter } from "./router/globalRouter";
import { videoRouter } from "./router/videoRouter";
import "./routes";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser({ extended: true }));

app.use("/", globalRouter);
app.use("/user", userRouter);

export default app;
