const resolve = require('path').resolve;

module.exports = () => {
  return {
    context: resolve('src/browser'),
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: resolve('public'),
      publicPath: '/public/'
    },
    module: {
      loaders: [
        {test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/}
      ],
    },
  }
}