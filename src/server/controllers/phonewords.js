const Phoneword = require('../models/phoneword');

// Render home page
exports.index = (request, response) => {
  response.render('index', {
    env: process.env.NODE_ENV
  });
};

// Fetch all phonewords
exports.all = (request, response) => {
    let list = new Phoneword().convert([], request.params.number.split(''));
    response.status(200).send(list);
};
