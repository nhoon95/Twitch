import routes from "../routes";
import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { testVideo: videos });
};
export const login = (req, res) => res.render("login");

export const logout = (req, res) => res.render("logout");

export const getJoin = (req, res) => res.render("join");

export const postJoin = (req, res) => {
  const {
    body: { email, name, password, password1 },
  } = req;
  if (password !== password1) {
    res.status(400);
    res.render("join");
  } else {
    res.redirect(routes.home);
  }
};

export const userDetail = (req, res) => res.render("userDetail");

export const editProfile = (req, res) => res.render("editProfile");

export const changePassword = (req, res) => res.render("changePassword");
