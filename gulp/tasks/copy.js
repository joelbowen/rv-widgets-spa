const gulp = require('gulp');
const gulpCopy = require('gulp-copy');

const gulpConfig = require('../shared/config')();

gulp.task('copy:dist', () =>
  gulp.src([
    `${gulpConfig.client}/assets/**/*.{jpg,gif,bmp,png,svg}`,
    `!${gulpConfig.client}/assets/rdash-ui/**/*`,
    `${gulpConfig.client}/*.html`
  ])
    .pipe(gulpCopy(`${gulpConfig.dist}`, { prefix: 1 }))
);
