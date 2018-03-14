const Phoneword = require('../models/phoneword');

// Render home page
exports.index = (request, response) => {
  response.render('index', {
    env: process.env.NODE_ENV
  });
};

// Fetch all phonewords
exports.all = (request, response) => {
  try{
    const list = new Phoneword().convert([], String(request.params.number).split(''));

    response.status(200).send(list);
  } catch(e) {
    response.status(500).send({ error: 'Something went wrong!' })
  }
};
