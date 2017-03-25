const express = require('express');
const { resolve } = require('path');

const app = express();
const www = resolve(__dirname, '../dist');

// begin webpack middleware
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true
  },
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));
// end webpack middleware

app.use(express.static(www));
app.get('/api', (req, res) => {
  console.log(new Date());
  res.json(new Date());
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log(`Server listening port ${port}`);
});
