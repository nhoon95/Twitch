import express from "express";

export const userRouter = express.Router();

userRouter.get("/user", (req, res) => res.send("users"));
userRouter.get("/userDetail", (req, res) => res.send("userDetail"));
userRouter.get("/editProfile", (req, res) => res.send("editProfile"));
userRouter.get("/changePassword", (req, res) => res.send("changePassword"));