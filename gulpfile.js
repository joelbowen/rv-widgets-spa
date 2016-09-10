const gulp = require('gulp');

require('require-dir')('./gulp/tasks');

gulp.task('build', [
  'clean:dist',
  'copy:dist',
  'webpack:build'
]);
