const knex = require("../../database");

module.exports = {
	async getCustomers(request, response) {
		const result = await knex("Customers");

		return response.json(result);
	},
};
