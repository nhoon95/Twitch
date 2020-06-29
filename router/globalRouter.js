import express from "express";

export const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("home"));
globalRouter.get("/login", (req, res) => res.send("login"));
globalRouter.get("/logout", (req, res) => res.send("logout"));
globalRouter.get("/search", (req, res) => res.send("search"));
