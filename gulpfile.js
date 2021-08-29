// 'use strict';
//
// var gulp = require('gulp');
// var sass = require('gulp-sass')(require('sass'));
//
// sass.compiler = require('node-sass');
//
// gulp.task('scss', function () {
//     return gulp.src('./src/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./dist'));
// });
//
// gulp.task('sass:watch', function () {
//     gulp.watch('./sass//*.scss', ['sass']);
// });
//
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

// gulp.task('sass:watch', function () {
//     gulp.watch('./sass//*.scss', ['sass']);
// });

// 'use strict';
//
// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var pipeline = require('readable-stream').pipeline;
//
//
//
// gulp.task('uglify', function () {
//     return pipeline(
//         gulp.src('src/js/main.js'),
//         uglify(),
//         gulp.dest('./dist/js'));
// });

// 'use strict';

// const gulp = require('gulp');
const image = require('gulp-image');

gulp.task('image', function () {
    gulp.src('./src/img/**/*.png')
        .pipe(image())
        .pipe(gulp.dest('./dist/img'));
});


