// @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
// @ BOILER PLATE SERVER CONNECTION @
// @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @

const express = require('express');
const parser = require('body-parser');
const router = require('./routes.js');
const path = require('path');

const scheduleRouter = require('./scheduleRoutes.js');
const reportsRouter = require('./reportsRoutes.js');
const loginRouter = require('./loginRoutes.js');
const profileRouter = require('./profileRoutes.js')

const app = express();
//const session = require('express-session');
const passport = require('passport');

app.use(parser.urlencoded({
  extended: true
}));

app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/', router);
app.use('/', scheduleRouter);
app.use('/', reportsRouter);
app.use('/', loginRouter);
app.use('/', profileRouter);

app.use('/*', (req, res) => res.redirect('/'));
//app.use('/*', (req, res) => res.sendFile(path.join(__dirname, '/../client/dist')));
// initialize Passport
//app.use(session({ secret: '369lex' }));
app.use(passport.initialize());
//app.use(passport.session());

const port = 8080;

app.set('port', port);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports.app = app;
