const CategoryModel = require("../models/CategoriesModel");

module.exports = class HomeController {
	static async HomeGetController(req, res, next) {
		try {
			CategoryModel.res.json({
				ok: true,
				appName: "Kun.uz Clone Backend",
				appVersion: "0.0.1",
				appDescription: "desc",
			});
		} catch (error) {
			next(error);
		}
	}
};
