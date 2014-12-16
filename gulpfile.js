var gulp        = require('gulp');

// You might like to use these...
var sass 		= require('gulp-sass');
var browserSync = require('browser-sync');
var imagemin 	= require('gulp-imagemin');


// Sass
gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        // hmmmmm - http://www.browsersync.io/docs/gulp/
    });
});




gulp.task('default', ['sass','browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});