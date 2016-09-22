import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'plumber';

gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe(plumber)
		.pipe(imagemin([
			imagemin.optipng({
				optimizationLevel: 3
			}),
			imagemin.jpegtran({
				progressive: true
			})
		]))
		.pipe(gulp.dest('dist/assets/images'));
});
