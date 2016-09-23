import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';

gulp.task('images', () => {
	return gulp.src('app/images/**/*')
		.pipe(plumber())
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
