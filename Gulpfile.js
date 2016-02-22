var gulp = require('gulp');
var del = require('del');
var karma = require('karma');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit('end');
}

gulp.task('clean', function() {
  return del('./bin/*');
});

gulp.task('build', ['clean'], function() {
  var sourceFile = './app/dependency.js';
  return browserify([sourceFile]).bundle().on('error', handleErrors)
    .pipe(source(sourceFile))
    .pipe(gulp.dest('./bin'));
});

gulp.task('test', ['clean'], function(callback) {
  new karma.Server({
   configFile: __dirname + '/karma.conf.js'
  }, function() {callback();}).start();
});