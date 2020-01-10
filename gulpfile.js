const gulp = require('gulp')
const stylus = require('gulp-stylus')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('styl', function() {
    return gulp.src('stylus/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
})

gulp.task('watch', function() {
    gulp.watch('stylus/*.styl', gulp.series('styl'))
})