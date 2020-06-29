const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const routes = require("./server/src/routes");

const baseDir = path.resolve("client", "build");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); //avisa o express para transitar dados no estilo json
app.use(routes);
app.use(cors());
app.use(express.static(`${baseDir}`));

app.use((error, request, response, next) => {
	response.status(error.status || 500);
	response.json({ error: error.message });
});

app.get("*", (request, respose) =>
	respose.sendFile("index.html", { root: baseDir })
);

app.use((request, response, next) => {
	//na nossa API isso não funciona, 404 cai no front end
	const eroor = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
