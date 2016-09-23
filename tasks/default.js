import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('styles:dependencies', () => (
	runSequence(
		'sprites',
		'icons',
		'styles'
	)
));

gulp.task('default', () => (
	runSequence('images',
		[
			'styles:dependencies',
			'templates'
		],
		'server',
		'watch'
	)
));

gulp.task('build', () => (
	gulp.start(
		'styles:dependencies',
		'templates',
		'scripts',
		'copy',
		'images'
	)
));
