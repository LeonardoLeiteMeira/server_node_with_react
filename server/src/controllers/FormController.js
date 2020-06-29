const knex = require("../../database");

module.exports = {
	async getForms(request, response, next) {
		try {
			const { Id } = request.query;
			const { page = 1 } = request.query;

			const query = knex("Forms")
				.limit(5)
				.offset((page - 1) * 5);

			const countObj = knex("Forms").count();

			if (Id) {
				query
					.where("Customers.Id", Id)
					.join("Customers", "Customers.Id", "=", "Forms.Customer_Id")
					.select(
						"Forms.*",
						"Customers.FirstName",
						"Customers.LastName"
					);

				countObj.where("Customer_Id", Id);
			}
			const [count] = await countObj;
			const forms = await query;
			// console.log(count);
			response.header("X-Total-Count", count["count(*)"]);

			return response.json(forms);
		} catch (error) {
			next(error);
		}
	},

	async createForm(request, response, next) {
		try {
			const { Customer_Id, Data, Type } = request.body;

			await knex("Forms").insert({
				Customer_Id,
				Data,
				Type,
			});

			return response.status(201).send();
		} catch (error) {
			next(error);
		}
	},
};
