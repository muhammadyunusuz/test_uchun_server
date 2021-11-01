const mongoose = require("mongoose");
// const CategorySchema = require("../models/CategoriesModel");

async function mongo() {
	await mongoose.connect(
		"mongodb+srv://muhammad:<password>@cluster0.kxp1v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	);
}

module.exports = mongo;
