'use strict';

const phonewords = require('./phonewords');
const validate = require('express-validation');
const validation = require('../validators/phonewords');

// Define handlers for application routes
module.exports = (app) => {
  app.get('/', phonewords.index)
  app.get('/phonewords/:number', validate(validation), phonewords.all);
};
