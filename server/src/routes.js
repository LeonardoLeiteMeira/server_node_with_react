const express = require("express");
const routes = express.Router();

const CustomersController = require("./controllers/CustomersController");
const TestController = require("./controllers/TestController");
const FormController = require("./controllers/FormController");

routes.get("/api/test", TestController.test);

routes.get("/api/getcustomers", CustomersController.getCustomers);
routes.post("/api/createcustomer", CustomersController.createCustomer);
routes.put("/api/updatecustomer/:Id", CustomersController.updatecustomer);
routes.delete("/api/deletecustomer/:Id", CustomersController.deletecustomer);

routes.get("/api/forms", FormController.getForms);
routes.post("/api/forms", FormController.createForm);

module.exports = routes;
