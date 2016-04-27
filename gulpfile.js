var gulp = require('gulp');

gulp.task('copyAssets', function (){
  gulp.src('static/**/*').pipe(gulp.dest('public/assets'));
});

gulp.task('buildMarkup', function(){
  var builder = require('./lib/markupBuilder');
  builder();
});

gulp.task('buildStylesheets', function () {
  var builder = require('./lib/stylesheetBuilder');
  builder();
});

gulp.task('watch', function () {
  var paths = {
    markup: ['src/layout/**/*.jade'],
    assets: 'statis/**/*'
  };
  gulp.watch(paths.markup, ['buildMarkup']);
  gulp.watch(paths.assets, ['copyAssets']);
});

gulp.task('default', ['watch', 'buildStylesheets', 'copyAssets',
  'buildMarkup']);
