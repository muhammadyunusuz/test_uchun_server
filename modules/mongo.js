const mongoose = require("mongoose");
// const CategorySchema = require("../models/CategoriesModel");

async function mongo() {
	await mongoose.connect("mongodb://localhost:27017/test_uchun_mongoose");
}

module.exports = mongo;
