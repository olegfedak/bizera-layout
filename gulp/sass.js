var gulp = require('gulp'); // Підключаємо Gulp
var sass = require('gulp-sass'); // Sass пакет
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var uncss = require('postcss-uncss');
var concat = require('gulp-concat');
var nano = require('gulp-cssnano');
 
gulp.task('sass', function () { // Створюємо таск "sass"
  return gulp.src('src/sass/app.scss') // Беремо джерело
    .pipe(sass().on('error', sass.logError)) // Перетворюємо Sass в CSS за допомогою gulp-sass
    .pipe(postcss([ autoprefixer() ])) // Розставляємо вендорні префікси
    //.pipe(concat('app.css')) // Зклеюємо файли в один
    //.pipe(postcss([ uncss({html: ['src/**/*.html'], ignore: ['/^#js/']}) ])) // Видаляємо незадіяні стилі
    //.pipe(nano()) // Мінімізуємо css-файл
    .pipe(gulp.dest('dist/css')); // Розміщуємо результат в папку
});

gulp.task('css', function () { 
  return gulp.src('dist/css/app.css') // Беремо джерело
    .pipe(postcss([ uncss({html: ['src/**/*.html'], ignore: ['/^#js/']}) ])) // Видаляємо незадіяні стилі
    .pipe(nano()) // Мінімізуємо css-файл
    .pipe(gulp.dest('dist/css')); // Результат
});
 
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.{scss,sass}', ['sass']); // Спостерігання за змінами sass файлів в папці sass
});


