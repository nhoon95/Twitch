//globalllll
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const JOIN = "/join";

//userrrrrr
const USER = "/user";
const USERDETAIL = "/:id";
const EDIT_PROFILE = "/editprofile";
const CHANGE_PASSWORD = "/changepassword";

//videoooooo
const VIDEO = "/video";
const UPLOAD = "/upload";
const VIDEODETAIL = "/:id";
const EDITVIDEO = "/:id/editvideo";
const DELETEVIDEO = "/:id/deletevideo";

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
  upload: UPLOAD,
  videoDetail: VIDEODETAIL,
  join: JOIN,
  video: VIDEO,
};

export default routes;
