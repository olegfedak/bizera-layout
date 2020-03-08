var gulp = require('gulp'); // Підключаємо Gulp
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify');
var gutil = require('gulp-util'); // Обійти проблему з синтаксисом uglify 
const babel = require('gulp-babel'); // Рішення babel, виконувати перед uglify


gulp.task('scripts', function () {
    return gulp.src ('src/js/uikit-icons.min.js')
      .pipe(babel({presets: ['env']}))
      //.pipe(concat('src.js')) // Об'єднюємо в один файл
      //.pipe(uglify().on('error', gutil.log)) // Мініфікуємо
      .pipe(gulp.dest('dist/js')); // Записуємо результат в папку
  });

gulp.task('scripts:watch', function () {
  gulp.watch('src/js/**/*.js', ['scripts']); // Спостерігання за змінами sass файлів в папці sass
});