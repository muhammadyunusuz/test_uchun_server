const { NewsOneGetController } = require("../controllers/NewsController");

const router = require("express").Router();

router.get("/:news_slug", NewsOneGetController);

module.exports = router;
