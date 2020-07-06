import routes from "./routes";

import "./routes";

export const handleMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAthenticated: true,
    id: 1,
  };
  next();
};
