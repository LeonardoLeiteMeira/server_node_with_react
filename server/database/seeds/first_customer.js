exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("Customers")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("Customers").insert([
				{
					FirstName: "Leonardo",
					Id: 1,
					LastName: "Leite",
					CPF: "11111111111",
					Address: "Rua X ",
					Email: "email@email.com",
					Phone: "70707070",
				},
			]);
		});
};
