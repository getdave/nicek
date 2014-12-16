var gulp        = require('gulp');

// You might like to use these...
var sass 		= require('gulp-sass');
var browserSync = require('browser-sync');

var imagemin 	= require('gulp-imagemin');
var cssmin 		= require('gulp-cssmin');


// Sass
gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        // something missing? try the docs...
    });
});




gulp.task('default', ['sass','browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});