const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
console.log(port, "..port");


app.get("/", (req, resp) => {
	const env = require("fs").readFileSync("env.txt",{"encoding": "utf8"});
	resp.send(env).end();
});

app.get("/ping",(req, resp) => {

	resp.send("pong").end();
});


app.listen(port, () => {console.log('started')});
