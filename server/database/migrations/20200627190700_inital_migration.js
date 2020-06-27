exports.up = function (knex) {
	return knex.schema.createTable("Customers", function (table) {
		table.increments("Id").primary();
		table.text("FirstName").notNullable;
		table.text("LastName").notNullable;
		table.text("CPF", 11).unique().notNullable;
		table.text("Address").unique().notNullable;
		table.text("Email").notNullable;
		table.text("Phone").notNullable;
		table.timestamp("CreatedAt").defaultTo(knex.fn.now());
		table.timestamp("UpdatedAt").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.droptable("Customers");
};
