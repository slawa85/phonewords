const Phoneword = require('../models/phoneword');

// Render home page
exports.index = (request, response) => {
  response.render('index', {
    env: process.env.NODE_ENV
  });
};

// Fetch all phonewords
exports.all = (request, response, next) => {
  try{
    const list = new Phoneword().convert([], String(request.params.number).split(''));

    response.status(200).send(list);
  } catch(e) {
    next(new Error('Something went wrong!'))
  }
};
