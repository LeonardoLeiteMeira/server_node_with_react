const knex = require("../../database");

module.exports = {
	async getCustomers(request, response, next) {
		try {
			const result = await knex("Customers");
			return response.json(result);
		} catch (error) {
			next(error);
		}
	},

	async createCustomer(request, response, next) {
		try {
			const {
				FirstName,
				LastName,
				CPF,
				Address,
				Email,
				Phone,
			} = request.body;

			await knex("Customers").insert({
				FirstName,
				LastName,
				CPF,
				Address,
				Email,
				Phone,
			});

			return response.status(201).send();
		} catch (error) {
			next(error);
		}
	},

	async updatecustomer(request, response, next) {
		try {
			const {
				FirstName,
				LastName,
				CPF,
				Address,
				Email,
				Phone,
			} = request.body;

			const { Id } = request.params;

			await knex("Customers")
				.update({
					FirstName,
					LastName,
					CPF,
					Address,
					Email,
					Phone,
				})
				.where({ Id });

			return response.status(201).send();
		} catch (error) {
			next(error);
		}
	},

	async deletecustomer(request, response, next) {
		try {
			const { Id } = request.params;

			await knex("Customers").where({ Id }).del();

			return response.status(201).send();
		} catch (error) {
			next(error);
		}
	},
};
