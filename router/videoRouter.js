import express from "express";
import routes from "../routes";
import {
  upload,
  videoDetail,
  editVideo,
  deleteVideo,
  video,
  getUpload,
  postUpload,
} from "../controllers/videoController";
export const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.get(routes.upload, postUpload);

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.video, video);
