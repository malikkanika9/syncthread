const express = require("express");
const userRouter = require('./userRouter')

const router = express.Router()

const defaultRoutes = [
  {
    path: "/user",
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;