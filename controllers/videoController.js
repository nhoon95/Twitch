import routes from "../routes";
import Video from "../models/Video";
import Image from "../models/Image";

export const getUpload = (req, res) => res.render("upload");
export const postUpload = async (req, res) => {
  try {
    const path1 = await req.files["videoFile"][0].path;
    const path2 = await req.files["imageFile"][0].path;
    //이제 여기서 밑에 코멘트 넣을떄 이미지파일을 몽구스에 넣으믄대
    const {
      body: { title, description, game, creator },
    } = req;
    const newVideo = await Video.create({
      fileUrl: path1,
      title,
      description,
      game,
      imageFileUrl: path2,
      creator: req.user.id,
      avatarUrls: req.user.avatarUrl,
    });
    req.user.videos.push(newVideo._id);
    req.user.save();
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (error) {
    console.log(error);
  }
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id).populate("creator");
    res.render("videoDetail", { video });
    console.log(video);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const video = (req, res) => res.render("video");

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    //나중에 크리에이터 만들어서 집어넣어
    body: { title, description, game, creator },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description, game });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

export const search = async (req, res) => {
  const {
    query: { search },
  } = req;
  let video = [];
  try {
    video = await Video.find({
      title: { $regex: search, $option: "i" },
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { searching: search });
};
