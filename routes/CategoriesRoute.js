const {
	CategoryGetController,
	CategoryOneGetController,
} = require("../controllers/CategoriesController");

const router = require("express").Router();

router.get("/", CategoryGetController);
router.get("/:category_id", CategoryOneGetController);

module.exports = router;
