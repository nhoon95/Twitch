import routes from "./routes";

import "./routes";

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};
