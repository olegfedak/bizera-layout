var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
	runSequence(
		'copy',
		'sass',
		'render',
		//'css',
		'server',
		'copy:watch',
		'sass:watch',
		'render:watch'	
	);
});