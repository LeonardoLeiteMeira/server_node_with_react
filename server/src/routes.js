const express = require("express");
const routes = express.Router();
const path = require("path");
const baseDir = path.resolve("client", "build");

const CustomersController = require("./controllers/CustomersController");
const TestController = require("./controllers/TestController");

routes.get("/api/test", TestController.test);
routes.get("/api/getcustomers", CustomersController.getCustomers);

routes.post("/api/createcustomer", CustomersController.createCustomer);

routes.put("/api/updatecustomer/:Id", CustomersController.updatecustomer);

routes.delete("/api/deletecustomer/:Id", CustomersController.deletecustomer);

module.exports = routes;
