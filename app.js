var express = require("express");
var app = express();
var path = require("path");
// const { Mentors, Funding, Newsletter, Message } = require("./config");
const { Cricbuzz , Satta , SarkariResult } = require("./db");

app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/cricbuzz", function (req, res) {
  res.render("blog", { content: Cricbuzz });
});

app.get("/satta", function (req, res) {
    res.render("blog", { content: Satta });
  });

app.get("/sarkariresult", function (req, res) {
    res.render("blog", { content: SarkariResult });
  });


app.get('*', function(req, res){
    res.render("notfound");
  });

app.listen(3000, (req, res) => {
  console.log("Server up and running at port 3000");
});
