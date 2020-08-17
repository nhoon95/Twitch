import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router/userRouter";
import { globalRouter } from "./router/globalRouter";
import { videoRouter } from "./router/videoRouter";
import { apiRouter } from "./router/apiRouter";
import routes from "./routes";
import { handleMiddleware } from "./globalMiddleware";
import favicon from "serve-favicon";
import "./passport";
import passport from "passport";
import expressSession from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
const app = express();

const CokieStore = MongoStore(expressSession);

app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));
app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(morgan("dev"));
app.use(
  expressSession({
    secret: process.env.SECRET_COOKIE,
    resave: false,
    saveUninitialized: true,
    store: new CokieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(handleMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.api, apiRouter);
app.use(routes.video, videoRouter);

export default app;
