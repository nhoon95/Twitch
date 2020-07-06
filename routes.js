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
  editVideo: EDITVIDEO,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  deleteVideo: DELETEVIDEO,
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
};

export default routes;
