import routes from "../routes";
import Video from "../models/Video";

export const getUpload = (req, res) => res.render("upload");
export const postUpload = async (req, res) => {
  const {
    body: { title, description, game },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    game,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { video });
    console.log(video);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const video = (req, res) => res.render("video");
export const editVideo = (req, res) => res.render("editVideo");

export const deleteVideo = (req, res) => res.render("deleteVideo");

export const search = (req, res) => {
  const {
    query: { search },
  } = req;
  res.render("search", { searching: search });
};
