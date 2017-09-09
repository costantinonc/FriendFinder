var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 
var PORT = process.env.PORT || 8080;

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});
