// setup express 
const express = require("express");
const app = express();
const port = 3000;

// setup handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars"); 

// Make the "public" folder available statically
const path = require("path");
app.use(express.static(path.join(__dirname, "public"))); 

// Setup routes
const appRouter = require("./routes/home.js");
app.use(appRouter); 

// Setup express-session
const session = require("express-session");
app.use(session({
   resave: false,
   saveUninitialized: false,
   secret: "site warrior"
}));

// run the server 
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});