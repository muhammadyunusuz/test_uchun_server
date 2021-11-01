module.exports = async (db) => {
	await db.categories.hasMany(db.news, {
		foreignKey: {
			name: "category_id",
			allowNull: false,
		},
	});

	await db.news.belongsTo(db.categories, {
		foreignKey: {
			name: "category_id",
			allowNull: false,
		},
	});
};
