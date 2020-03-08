var gulp = require('gulp'); // Подключаем Gulp
var fs = require("fs");
var s3 = require("gulp-s3-publish");

gulp.task('deploy', function () {
  var aws = JSON.parse(fs.readFileSync('./aws.json'));
  var path = { uploadPath: 'dev/bizera/' };
  return gulp.src('./dist/**/*')
    .pipe(s3(aws, path));
});