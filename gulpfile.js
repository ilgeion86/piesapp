const gulp = require('gulp')
const stylus = require('gulp-stylus')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('styl', function() {
    return gulp.src('stylus/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
})
gulp.task('styl_mobile', function() {
    return gulp.src('stylus/mobile/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css/mobile'))
})
gulp.task('styl_desctop', function() {
    return gulp.src('stylus/desctop/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css/desctop'))
})
gulp.task('watch', function() {
    gulp.watch(
        [
            'stylus/*.styl',
            'stylus/mobile/*.styl',
            'stylus/desctop/*.styl'
        ],
        gulp.series('styl', 'styl_desctop'))
})