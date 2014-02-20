
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

var jsFiles = ['index.js', 'lib/**/*.js'],
    js = gulp.src(jsFiles);

gulp.task('default', ['jshint', 'browser']);

gulp.task('jshint', function() {
  js.pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
  gulp.watch(jsFiles, ['jshint']);
});

gulp.task('browser', ['jshint'], function() {
  gulp.src('index.js', {read: false})
    .pipe(browserify({
      standalone: 'jo.buffers',
      insertGlobals: true,
      transform: ['regeneratorify'],
      debug : !gutil.env.production
    }))
    .pipe(concat('jo-buffers.js'))
    .pipe(gulp.dest('./build'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
});

gulp.task('clean', function() {
   gulp.src(['build/*'], {read: false})
    .pipe(clean());
});
