var gulp = require('gulp');
var panini = require('panini'); // Працює по специфікації Handlebars

gulp.task('render', function() {
  gulp.src('./src/pages/**/*.html')
    .pipe(panini({
      root: './src/pages/',
      layouts: './src/layouts/',
      partials: './src/partials/',
      helpers: './src/helpers/',
      data: './src/data/'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('render:watch', function () {
  gulp.watch(['./src/{pages,layouts,partials,helpers,data}/**/*'], ['render', panini.refresh]);
  //gulp.watch('src/**/*.html', [panini.refresh]); // Спостерігання за змінами html файлів в папці
});
 
