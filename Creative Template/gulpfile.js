
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const imagemin = require('gulp-imagemin');

//Запуск сервера
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
});

//Минификация html
gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

//Компиляция sass в css, минификация, добавление префиксов, переименование файла
gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
});

//Перенос шрифтов
gulp.task('fonts', function () {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"));
});

// Перенос мейлера
gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

//Перенос скриптов и минификация
gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("dist/js"));
});

//Перенос и минификация картинок и иконок
gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img"));
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/icons"));
});

//Перезапуск браузера и перезапись файлов
gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)").on('change', gulp.parallel('styles', browserSync.reload));
    gulp.watch("src/*.html").on('change', gulp.parallel('html', browserSync.reload));
    gulp.watch("src/js/*.js").on('change', gulp.parallel('scripts', browserSync.reload));
});

//Запуск всех задач
gulp.task('default', gulp.parallel('server', 'html', 'styles', 'fonts', 'mailer', 'scripts', 'images', 'icons', 'watch'));
