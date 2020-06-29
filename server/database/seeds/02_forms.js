exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("Forms")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("Forms").insert([
				{
					Id: 1,
					Customer_Id: 1,
					Data:
						'{"User":"Usuario","Date":"01/01/2020","Data":{"Nome":"Leonardo","CPF":"12221212112","CRLV":"Amazon S3 link","Tipo":"Inspection type"}}',
					Type: "Form Type",
				},
			]);
		});
};
