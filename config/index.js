'use strict';

// Application configuration - environment settings here are the same across
// all environments.
let config = {};

// ---------------------------------------------------------------
// Config values common across environments (overridable defaults)
// ---------------------------------------------------------------

// HTTP port for Express
config.port = process.env.PORT || 3000;


// ----------------------------------------------------
// Assign values based on current execution environment
// ----------------------------------------------------
let environmentSettings = {};
switch (process.env.NODE_ENV) {
  case 'production': environmentSettings = require('./production'); break;
  case 'test': environmentSettings = require('./test'); break;
  default: environmentSettings = require('./development'); break;
}
config = Object.assign(config, environmentSettings);

// Export final configuration object
module.exports = config;
