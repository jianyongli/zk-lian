var gulp = require('gulp');
var scss = require('gulp-sass');
var minCss = require('gulp-clean-css');
var minHtml = require('gulp-htmlmin');
var minJs = require('gulp-uglify');
var server = require('gulp-webserver');

//copycss
gulp.task('copycss', function() {
    gulp.src('src/css/common.css')
        .pipe(gulp.dest('dist/css'))
});

//压缩css
gulp.task('minCss', function() {
    gulp.src('src/css/*.scss')
        .pipe(scss())
        .pipe(minCss())
        .pipe(gulp.dest('dist/css'))
})

var options = { removeComments: true, collapseWhitespace: true, collapseBooleanAttributes: true, removeEmptyAttributes: true, removeScriptTypeAttributes: true, removeStyleLinkTypeAttributes: true, minifyJS: true, minifyCSS: true };
gulp.task('minHtml', function() {
        gulp.src('src/index.html')
            .pipe(minHtml(options))
            .pipe(gulp.dest('dist'))
    })
    //压缩js

gulp.task('minJs', function() {
    gulp.src('src/js/*.js')
        .pipe(minJs())
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['minCss', 'minJs', 'minHtml', 'copycss'])