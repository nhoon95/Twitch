//globalllll
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//userrrrrr
const USER = "/user";
const USERDETAIL = "/:id";
const EDIT_PROFILE = "/editprofile";
const CHANGE_PASSWORD = "/changepassword";

//videoooooo
const VIDEO = "/video";
const UPLOAD = "/upload";
const VIDEODETAIL = "/:id";
const EDITVIDEO = "/editvideo";
const DELETEVIDEO = "/deletevideo";

const routes = {
  home: HOME,
  login: LOGIN,
  logOut: LOGOUT,
  search: SEARCH,
  userDetail: USERDETAIL,
  editVideo: EDITVIDEO,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  deleteVideo: DELETEVIDEO,
  user: USER,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: VIDEODETAIL,
};

export default routes;
