// Update with your config settings.

module.exports = {
	development: {
		client: "mysql2",
		connection: {
			host: "mysql669.umbler.com",
			port: "41890",
			database: "testecrivo",
			user: "leonardodb",
			password: "administrador",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: `${__dirname}/server/database/migrations`,
		},
		seeds: {
			directory: `${__dirname}/server/database/seeds`,
		},
	},

	staging: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "postgresql",
		connection: {
			database: "my_db",
			user: "username",
			password: "password",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
