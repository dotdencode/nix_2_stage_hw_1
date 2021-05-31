const {src, dest, series} = require('gulp');
const sass = require('gulp-sass');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const csso = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
    return src('./html/*.html')
    .pipe(include({
        prefix: '##'
    }))
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(dest('dist'))
}

function scss() {
    return src('./css/*.scss')
    .pipe(sass())
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(dest('dist'))
}

exports.build = series(html, scss);

