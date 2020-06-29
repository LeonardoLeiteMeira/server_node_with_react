exports.up = function (knex) {
	return knex.schema.createTable("Forms", function (table) {
		table.increments("Id").primary();
		table
			.integer("Customer_Id")
			.unsigned()
			.references("Id")
			.inTable("Customers")
			.notNullable()
			.onDelete("CASCADE");
		table.string("Data", 1000);
		table.string("Type", 30).notNullable;
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("Forms");
};
