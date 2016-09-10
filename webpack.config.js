const path = require('path')

module.exports = {
  context: __dirname,
  entry: './client/App.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'assets/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.join(__dirname, '/client'),
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(.v=[0-9].[0-9].[0-9])?/,
        loader: `file?name=/assets/fonts/[name].[ext]`
      }
    ]
  },
  plugins: []
}
