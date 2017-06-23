// Required Express Framework
const express = require('express');
const app = express();

// Set Up View Templating.
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views/`);

// Makes the generated html easier to read
app.locals.pretty = true;

// Get Express Router from routes.
const router = require('./routes');

// Add Routing to the app.
app.use('/', router);

const server = app.listen(3000, function () {
    console.log("Listening on port 3000.");
});