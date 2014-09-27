var gulp = require('gulp');
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');
var importCSS = require("gulp-cssimport");
var minifyCSS = require('gulp-minify-css');

var paths = {
	css: {
		src: './assets/css/index.css'
		, dest: './assets/css/'
		, watch: './assets/css/*.css'
	}
};


// styles
gulp.task('styles', function() {
	gulp.src(paths.css.src)
		.pipe(importCSS())
		.pipe(uncss({
			html: ['./index.html']
		}))
		.pipe(minifyCSS())
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest(paths.css.dest));
});


// watches
gulp.task('watch', function() {
	gulp.watch(paths.css.watch, ['styles']);
});


// default task
gulp.task('default', function() {
	gulp.start('styles', 'watch');
});
