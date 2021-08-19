const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, resp) => {
	const env = require("fs").readFileSync("env.txt",{"encoding": "utf8"});
	resp.send(env).end();
});

app.get("/ping",(req, resp) => {

	resp.send("pong").end();
});


app.listen(process.env.port || port, () => {console.log('started')});
