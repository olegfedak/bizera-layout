var gulp = require('gulp'); // Подключаем Gulp

gulp.task('copy', function() { // Создаем таск "copy"
	return gulp.src('src/img/**/*') // Берем источник
		.pipe(gulp.dest('dist/img')) // Выгружаем результат в папку
});

gulp.task('copy:watch', function () {
  gulp.watch(['src/img','src/icons'], ['copy']); // Якщо в src щось міняється — запускаємо таску copy
});