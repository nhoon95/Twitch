import routes from "../routes";
import Video from "../models/Video";
import User from "../models/User";
import passport from "passport";
import Image from "../models/Image";

//집
export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    const images = await Image.find({});
    //어차피 홈에있는 동영상빼고 아이디에 할당된 이미지만넣어
    //주말에 꼭 해야된다 이세끼야
    res.render("home", {
      pageTitle: "Home",
      videos,
      images,
    });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

//로그인
export const getLogin = (req, res) => res.render("login");

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.join,
});

//깃허브로그인

export const githubLogin = passport.authenticate("github");

export const naverLogin = passport.authenticate("naver");

export const naverCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  const {
    _json: { email, nickname, profile_image, id },
  } = profile;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      user.naverId = id;
      user.save();
      done(null, user);
    } else {
      const newUser = await User.findOne({
        email,
        name: nickname || "nothing",
        avatarUrl: profile_image,
      });
      return done(null, newUser);
    }
  } catch (error) {
    done(error);
  }
};

export const githubCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        avatarUrl: avatar_url,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const goToHome = (req, res) => {
  res.redirect(routes.home);
};

//로그아웃
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

//가입
export const getJoin = (req, res) => res.render("join");

export const postJoin = async (req, res, next) => {
  const {
    body: { email, name, password, password1 },
  } = req;
  if (password !== password1) {
    res.status(400);
    res.redirect(routes.join);
  } else {
    try {
      const user = await User({
        email,
        name,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const userDetail = (req, res) => res.render("userDetail");

export const editProfile = (req, res) => res.render("editProfile");

export const changePassword = (req, res) => res.render("changePassword");
