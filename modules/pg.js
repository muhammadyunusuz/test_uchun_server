const { Sequelize } = require("sequelize");
const { default: slugify } = require("slugify");
const CategoriesModel = require("../models/CategoriesModel");
const NewsModel = require("../models/NewsModel");
const RelationsModel = require("../models/RelationsModel");

const sequelize = new Sequelize(
	"postgres://postgres:new_password@localhost:5432"
);

async function psql() {
	try {
		await sequelize.authenticate();

		let db = {};

		db.categories = await CategoriesModel(Sequelize, sequelize);
		db.news = await NewsModel(Sequelize, sequelize);

		await RelationsModel(db);

		// await sequelize.sync({ force: true });

		// await fakeInsert(db);

		return db;
	} catch (error) {
		console.log("SQL_ERROR", error);
	}
}

module.exports = psql;

async function fakeInsert(db) {
	// let category = await db.categories.create({
	// 	category_name: "O'zbekiston yangiliklar",

	// 	category_slug: slugify("O'zbekiston yangiliklar", {
	// 		replacement: "-", // replace spaces with replacement character, defaults to `-`
	// 		remove: undefined, // remove characters that match regex, defaults to `undefined`
	// 		lower: true, // convert to lower case, defaults to `false`
	// 		strict: true, // strip special characters except replacement, defaults to `false`
	// 		locale: "vi", // language code of the locale to use
	// 		trim: true,
	// 	}),
	// });

	// console.log(category);

	let news = await db.news.create({
		category_id: "97ac263e-6db7-481a-8f03-d3931f0bb5e8",
		news_title: "Qandaydir yangilik",
		news_text: "Test",
		news_slug: slugify("Qandaydir yangilik", {
			replacement: "-", // replace spaces with replacement character, defaults to `-`
			remove: undefined, // remove characters that match regex, defaults to `undefined`
			lower: true, // convert to lower case, defaults to `false`
			strict: true, // strip special characters except replacement, defaults to `false`
			locale: "vi", // language code of the locale to use
			trim: true,
		}),
	});

	console.log(news);
}
