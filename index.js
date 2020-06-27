const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const routes = require("./server/src/routes");

const baseDir = path.resolve("client", "build");
const app = express();
const port = process.env.PORT || 3000;

app.use(routes);
app.use(cors());
app.use(express.static(`${baseDir}`));
app.use(express.json()); //avisa o express para transitar dados no estilo json

app.get("*", (request, respose) =>
	respose.sendfile("index.html", { root: baseDir })
);

app.listen(port, () => console.log(`Listening on port ${port}`));
