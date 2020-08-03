//globalllll
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const JOIN = "/join";

//userrrrrr
const USER = "/user";
const EDIT_PROFILE = "/editprofile";
const CHANGE_PASSWORD = "/changepassword";
const USERDETAIL = "/:id";

//videoooooo
const UPLOAD = "/upload";
const VIDEO = "/video";
const VIDEODETAIL = "/:id";
const EDITVIDEO = "/:id/editvideo";
const DELETEVIDEO = "/:id/deletevideo";

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//favicon
const FAVICON = "/favicon.ico";

const routes = {
  home: HOME,
  login: LOGIN,
  logOut: LOGOUT,
  video: VIDEO,
  search: SEARCH,
  userDetail: (id) => {
    if (id) {
      return `/user/${id}`;
    } else {
      return USERDETAIL;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/video/${id}/editvideo`;
    } else {
      return EDITVIDEO;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  deleteVideo: (id) => {
    if (id) {
      return `/video/${id}/deletevideo`;
    } else {
      return DELETEVIDEO;
    }
  },
  user: USER,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `/video/${id}`;
    } else {
      return VIDEODETAIL;
    }
  },
  join: JOIN,
  favicon: FAVICON,
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
};

export default routes;
