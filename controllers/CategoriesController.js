module.exports = class CategoriesController {
	static async CategoryGetController(req, res, next) {
		try {
			const categories = await req.db.categories.findAll({
				raw: true,
			});

			res.json({
				ok: true,
				message: "OK",
				data: {
					categories,
				},
			});
		} catch (error) {
			next(error);
		}
	}

	static async CategoryOneGetController(req, res, next) {
		try {
			const category = await req.db.categories.findOne({
				where: {
					category_slug: req.params.category_id,
				},
				include: [
					{
						model: req.db.news,
					},
				],
			});

			if (category) {
				res.json({
					ok: true,
					message: "OK",
					data: {
						category,
					},
				});
			} else {
				res.status(404).json({
					ok: true,
					message: "NOT FOUND",
				});
			}
		} catch (error) {
			next(error);
		}
	}
};
