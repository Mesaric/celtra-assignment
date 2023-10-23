const hostname = '127.0.0.1';
const port = 3000;
 
var express = require("express");
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, hostname, function() {
  console.log(`Application started and Listening on ${hostname}:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});