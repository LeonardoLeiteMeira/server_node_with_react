require("dotenv/config");
// Update with your config settings.

module.exports = {
	development: {
		client: process.env.CLIENT_DB,
		connection: {
			host: process.env.HOST_DB,
			port: process.env.PORT_DB,
			database: process.env.DATABASE,
			user: process.env.USER_DB,
			password: process.env.PASSWORD_DB,
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
