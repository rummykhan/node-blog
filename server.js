// Required Express Framework
// https://expressjs.com/
const express = require('express');
const app = express();
const session = require('express-session');

// Set Up static assets directory.
app.use(express.static(`${__dirname}/public/`));

// Set Up View Templating.
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views/`);

// Require App Config..
const appConfig = require('./config/app');

// Enable Passport Local Authentication.
const passportLocal = require('./config/auth');
passportLocal();

// Makes the generated html easier to read
app.locals.pretty = true;

// Get Frontend Routes from app.
const frontend = require('./app/routes/frontend');

// Get Frontend Routes from app.
const admin = require('./app/routes/admin');

// Set Session with a secret and name.
app.use(session({
    secret: 'a1q2u3i4c5k6b7r8o9w0n1f2o3x4j5u6m7p8s9o0v1e2r3t4h5e6l7a8z9y0d1o2g',
    name: 'r_b_secure',
    resave: true,
    saveUninitialized: true,
}));

app.use(function (req, res, next) {
    next();
});

// Add the frontend part of the app.
app.use('/', frontend);

// Add the admin side of the app
app.use('/admin', admin);

const server = app.listen(appConfig.port, function () {
    console.log(`Listening on port ${appConfig.port}.`);
});