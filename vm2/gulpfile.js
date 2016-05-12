var gulp  = require('gulp');
var gutil = require('gulp-util');
var jshint= require('gulp-jshint');

gulp.task('default', function() {
    // place code for your default task here
    return gutil.log(`gulp gulp-util and a global gulp`);

});

gulp.task('jshint', function() {
    //('source/javascript/**/*.js')
    return gulp.src('test.js')
           .pipe(jshint())
           .pipe(jshint.reporter('jshint-stylish'));
});

var concat = require('gulp-concat');
 
gulp.task('concat', function() {
    console.log('to concat?');
    return gulp.src(["./venders/skeleton/css/normalize.css", "./venders/skeleton/css/skeleton.css" ])
        .pipe(concat('skeleton-all.css'))
        .pipe(gulp.dest('./public/css/'));
});
