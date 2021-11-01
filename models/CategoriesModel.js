const { Schema, model } = require("mongoose");

const { v4: uuidv4 } = require("uuid");

const CategorySchema = new Schema({
	category_id: {
		type: String,
		required: true,
		default: uuidv4(),
	},
	category_name: {
		type: String,
		required: true,
		trim: true,
	},
	category_slug: {
		type: String,
		required: true,
		trim: true,
	},
	category_slug: {
		type: String,
		required: false,
		trim: true,
	},
});

const CategoryModel = model("Category", CategorySchema);

module.exports = CategoryModel;
