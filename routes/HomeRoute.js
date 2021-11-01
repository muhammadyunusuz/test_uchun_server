const { HomeGetController } = require("../controllers/HomeController");

const router = require("express").Router();

router.get("/", HomeGetController);

module.exports = router;
