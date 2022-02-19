var express = require('express');
var app = express();
console.log("Hello World");

app.get('/', function(req, res) {
    // res.send("Hello Express");
    res.sendFile(__dirname + "/views/index.html");
  });

  app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  var response = "Hello json";
  var mySecret = process.env.MESSAGE_STYLE;
  if (mySecret == "uppercase") {
  response = response.toUpperCase();
} 
  res.json({message: response});
});



































 module.exports = app;
