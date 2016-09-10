const path = require('path');

const APP_DIR = path.join(__dirname, 'client');
const BUILD_DIR = path.join(__dirname, 'dist');

module.exports = {
  context: __dirname,
  entry: {
    app: [`${APP_DIR}/App.jsx`],
  },
  output: {
    path: BUILD_DIR,
    filename: 'assets/bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: APP_DIR,
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_DIR,
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(.v=[0-9].[0-9].[0-9])?/,
        loader: 'file?name=assets/fonts/[name].[ext]',
      },
    ],
  },
  plugins: [],
};
