// Required Express Framework
const express = require('express');
const app = express();
const router = express.Router();

// Set Up View Templating.
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views/`);

// Makes the generated html easier to read
app.locals.pretty = true;


router.get('/', function (req, res, next) {
    console.log(next);
    res.render("frontend/default/home-page/index", {title: 'rummykhan was here!!'});
});

router.get('/me', function (req, res) {
    res.send("Hello @therummykhan");
});

router.get('/who/:name?', function (req, res) {
    let name = req.params.name;
    if (!name) {
        name = '@who';
    } else {
        name = `@${name}`;
    }
    res.send(`Hello ${name}`);
});

router.get('*', function (req, res) {
    res.send("404 Not Found!");
});

// Add Routing to the app.
app.use('/', router);

const server = app.listen(3000, function () {
    console.log("Listening on port 3000.");
});