exports.up = function (knex) {
	return knex.schema.createTable("Customers", function (table) {
		table.increments("Id").primary();
		table.string("FirstName").notNullable;
		table.string("LastName").notNullable;
		table.string("CPF").unique().notNullable;
		table.string("Address").notNullable;
		table.string("Email").notNullable;
		table.string("Phone").notNullable;
		table.timestamp("CreatedAt").defaultTo(knex.fn.now());
		table.timestamp("UpdatedAt").defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("Customers");
};
