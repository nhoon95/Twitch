import passport from "passport";
import User from "./models/User";
import GitHubStrategy from "passport-github";
import { comeBackToHome, githubCallback } from "./controllers/userController";

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

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
