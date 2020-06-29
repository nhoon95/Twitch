import express from "express";

export const videoRouter = express.Router();

videoRouter.get("/videoDetail", (req, res) => res.send("videoDetail"));
videoRouter.get("/editVideo", (req, res) => res.send("editVideo"));
videoRouter.get("/deleteVideo", (req, res) => res.send("deleteVideo"));
//업로드, 비디오
