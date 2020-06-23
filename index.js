const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");

const baseDir = `${__dirname}/client/build/`;
const app = express();
const port = process.env.PORT || 80;

app.use(cors());
app.use(express.static(`${baseDir}`));
app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/api/test", (request, response) => {
	return response.json({
		helloWorld: "Hello World",
		BackEnd: "NodeJs App",
		FrontEnd: "React App",
	});
});

app.get("*", (req, res) => res.sendfile("index.html", { root: baseDir }));
