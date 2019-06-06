const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
	res.render("landing");
});

app.listen(3000, () => {
	console.log("DYONIS server Has Started.");
});