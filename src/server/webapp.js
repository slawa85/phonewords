'use strict';

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const morgan = require('morgan');
const ev = require('express-validation');

let app = express();

// Configure view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('x-powered-by', false);

// Configure middleware
app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static file serving happens everywhere but in production
if (process.env.NODE_ENV !== 'production') {
  let staticPath = path.join(__dirname, '..', '..', 'public');
  app.use('/static', express.static(staticPath));
}

// Mount application routes
routes(app);

// error handler
app.use(function (err, req, res, next) {
  // specific for validation errors
  if (err instanceof ev.ValidationError){
    return res.status(err.status).json({message: err.errors[0].messages[0]});
  }

  // other type of errors, it *might* also be a Runtime Error
  // example handling
  if (process.env.NODE_ENV !== 'production') {
    return res.status(500).json({message: err.message});
  } else {
    return res.status(500)
  }
});


// Export Express webapp instance
module.exports = app;
