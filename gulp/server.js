var gulp = require('gulp'); // Подключаем Gulp
var browserSync = require('browser-sync').create(); // Подключаем Browser Sync

gulp.task('server', ['render:watch', 'sass:watch'],  function() { // Создаем таск browser-sync
    browserSync.init({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: "dist" // Директория для сервера
        },
        files:['dist/*.html', 'dist/css/*.css', 'dist/img/*.*']
    });
});