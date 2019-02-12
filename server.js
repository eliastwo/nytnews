// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Set up our port to be either the host's designated port, or 3000
var PORT = 3015;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Have every request go through our route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = "mongodb://myroot:myroot1@ds013991.mlab.com:13991/news";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
