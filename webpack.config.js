const { resolve } = require('path');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

process.traceDeprecation = true;

module.exports = {
  entry: [
    './main.js',
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, 'src'),
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: resolve(__dirname, 'node_modules'),
        loader: 'style!css!sass?outputStyle=compress'
      }
    ]
  },
  resolve: {
    modules: [
      resolve(__dirname, 'node_modules')
    ],
    extensions: ['.js', '.json', '.jsx', '.css']
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'dist'),
    port: 2000,
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new NpmInstallPlugin({
      quiet: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
