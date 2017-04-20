const gulp = require('gulp'),
			sass = require('gulp-sass');

gulp.task('default', () => {
	gulp
		.src('style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
	gulp.watch('style.scss', ['default']);
});