import routes from "../routes";
import Video from "../models/Video";
import User from "../models/User";

export const home = async (req, res) => {
  const {
    body: { views },
  } = req;
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const getJoin = (req, res) => res.render("join");

export const postJoin = async (req, res) => {
  const {
    body: { email, name, password, password1 },
  } = req;
  if (password !== password1) {
    res.status(400);
    res.render("join");
  } else {
    try {
      const user = await User.create({
        email,
        name,
      });
      User.register(user, password);
      res.redirect(routes.home);
    } catch (error) {
      console.log(error);
    }
  }
};

export const userDetail = (req, res) => res.render("userDetail");

export const editProfile = (req, res) => res.render("editProfile");

export const changePassword = (req, res) => res.render("changePassword");
