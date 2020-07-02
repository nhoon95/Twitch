export const video = (req, res) => res.render("video");

export const upload = (req, res) => res.render("upload");

export const videoDetail = (req, res) => res.render("videoDetail");

export const editVideo = (req, res) => res.render("editVideo");

export const deleteVideo = (req, res) => res.render("deleteVideo");

export const search = (req, res) => {
  const {
    query: { search },
  } = req;
  res.render("search", { searching: search });
};
