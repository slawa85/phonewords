const phonewords = require('./phonewords');

// Define handlers for application routes
module.exports = (app) => {
  app.get('/', phonewords.index)
  app.get('/phonewords/:number', phonewords.all);
};
