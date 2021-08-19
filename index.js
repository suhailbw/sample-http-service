const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
	const env = require("fs").readFileSync("env.txt",{"encoding": "utf8"});
	resp.send(env).end();
});

app.get("/hello", (req, resp) => {
	resp.json({"message": "hello"});
});


app.listen(port, () => {console.log('started')});
