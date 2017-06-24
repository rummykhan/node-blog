// Required Express Framework
// https://expressjs.com/
const express = require('express')
    , app = express()
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , cookieParser = require('cookie-parser');

// maintain the order of middleware when using express with passport
// http://passportjs.org/docs/authenticate

// Set Up static assets directory.
app.use(express.static(`${__dirname}/public/`));

// Set up Cookie Parser
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request body as JSON
app.use(bodyParser.json());

// Set Session with a secret and name.
app.use(session({
    secret: 'a1q2u3i4c5k6b7r8o9w0n1f2o3x4j5u6m7p8s9o0v1e2r3t4h5e6l7a8z9y0d1o2g',
    name: 'r_b_secure',
    resave: true,
    saveUninitialized: true,
}));

// Initialize passport
app.use(passport.initialize());

// Add Session middleware of passport
app.use(passport.session());

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

// Add the frontend part of the app.
app.use('/', require('./app/routes/frontend'));

// Add the admin side of the app
app.use(appConfig.adminPortal, require('./app/routes/admin'));

app.listen(appConfig.port);