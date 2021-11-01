module.exports = class NewsController {
	static async NewsOneGetController(req, res, next) {
		try {
			const news = await req.db.news.findOne({
				where: {
					news_slug: req.params.news_slug,
				},
				include: [
					{
						model: req.db.categories,
					},
				],
			});

			if (news) {
				res.json({
					ok: true,
					message: "OK",
					data: {
						news,
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
