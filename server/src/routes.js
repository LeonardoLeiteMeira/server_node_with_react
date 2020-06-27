const express = require("express");
const routes = express.Router();
const path = require("path");
const baseDir = path.resolve("client", "build");

const CustomersController = require("./controllers/CustomersController");
const TestController = require("./controllers/TestController");

routes.get("/api/test", TestController.test);

routes.get("/api/customers", CustomersController.getCustomers);

module.exports = routes;
