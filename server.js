// ======================================= PACKAGES AND DEPENDENCIES INVOKE
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// ======================================= SERVER MAPS 
require("./app/routing/htmlRoutes.js")(app,path);
require("./app/routing/apiRoutes.js")(app);


// ======================================= SERVER START
app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
})
