// Required Express Framework
// https://expressjs.com/
const express = require('express');
const app = express();
const helmet = require('helmet');
const session = require('express-session');
const port = require('./config').port;

// Set Up View Templating.
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views/`);

// Makes the generated html easier to read
app.locals.pretty = true;

// Get Express Router from routes.
const router = require('./routes');

// Set Session with a secret and name.
app.use(session({
    secret: 'a1q2u3i4c5k6b7r8o9w0n1f2o3x4j5u6m7p8s9o0v1e2r3t4h5e6l7a8z9y0d1o2g',
    name: 'r_b_secure',
    resave: true,
    saveUninitialized: true,
}));

// Add Routing to the app.
app.use('/', router);

const server = app.listen(port, function () {
    console.log(`Listening on port ${port}.`);
});