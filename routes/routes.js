const routes = require("express").Router();

routes.use("/", require("./HomeRoute"));
routes.use("/categories", require("./CategoriesRoute"));
routes.use("/news", require("./NewsRoute"));

module.exports = routes;
