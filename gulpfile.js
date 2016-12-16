var gulp = require('gulp');

var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var dest = 'public/';

gulp.task('js', function(done) {

    console.log("processing.... js")
    var jsFiles = ['src/js/*'];
    console.log(plugins.mainBowerFiles().concat(jsFiles));

    gulp.src(plugins.mainBowerFiles({debugging: 'true'}).concat(jsFiles))
        .pipe(plugins.filter('**/*.js'))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dest + 'js'));

    done();
});

gulp.task('css', function(done) {

	var cssFiles = ['src/css/*'];
  console.log(plugins.mainBowerFiles().concat(cssFiles));

  gulp.src(plugins.mainBowerFiles().concat(cssFiles))
		.pipe(plugins.filter('**/*.css'))
		.pipe(plugins.order([
			'normalize.css',
			'*'
		]))
		.pipe(plugins.concat('main.css'))
		.pipe(plugins.minify())
		.pipe(gulp.dest(dest + 'css'));
    done();
});

gulp.task('default', gulp.series('js','css', function(done) {
    console.log("to jest dupa");
    done();
}));



gulp.watch('./public/*.html').on('change', function(path, stats) {
        console.log(path);
        //console.log(stats);
        // code to execute
    });
