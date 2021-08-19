const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
	const env = require("fs").readFileSync("env.txt",{"encoding": "utf8"});
	resp.send(env).end();
});

app.listen(port, () => {console.log('started')});
