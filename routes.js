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
const ME = "/me";

//videoooooo
const UPLOAD = "/upload";
const VIDEO = "/video";
const VIDEODETAIL = "/:id";
const EDITVIDEO = "/:id/editvideo";
const DELETEVIDEO = "/:id/deletevideo";

//github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

//naver
const NAVER = "/auth/naver";
const NAVER_CALLBACK = "/auth/naver/callback";

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
  naver: NAVER,
  naverCallback: NAVER_CALLBACK,
  me: ME,
};

export default routes;
