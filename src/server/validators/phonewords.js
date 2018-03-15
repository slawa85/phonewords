'use strict';

const Joi = require('joi');

module.exports = {
  options: {
    status: 422,
    statusText: 'Unprocessable Entity'
  },
  params: {
    number: Joi.number().integer().max(999999999),
  }
}
