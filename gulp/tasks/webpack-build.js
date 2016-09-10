const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');

const webpackConfig = Object.create(require('../../webpack.config'));

gulp.task('webpack:build', (callback) => {
  webpackConfig.plugins = webpackConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: true,
        NODE_ENV: JSON.stringify('production')
      }
    })
	);

	// run webpack
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true,
      reasons: true,
      chunks: false
    }));
    callback();
  });
});
