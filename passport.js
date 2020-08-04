import passport from "passport";
import User from "./models/User";
import GitHubStrategy from "passport-github";
import NaverStrategy from "passport-naver";
import {
  comeBackToHome,
  githubCallback,
  naverCallback,
} from "./controllers/userController";

//깃허브
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
      callbackURL: "http://localhost:7640/auth/github/callback",
    },
    githubCallback
  )
);

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.NAVER_ID,
      clientSecret: process.env.NAVER_SECRET,
      callbackURL: "http://localhost:7640/auth/naver/callback",
    },
    naverCallback
  )
);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
