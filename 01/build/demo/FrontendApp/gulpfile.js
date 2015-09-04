var gulp = require('gulp'),
  runSequence = require('run-sequence');

var del = require('del'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  replace = require('gulp-replace'),
  browserSync = require('browser-sync')
  // 入口任务
gulp.task('default', function() {
  runSequence('build', 'serve', 'watch');
});

gulp.task('build', function(callback) {
  runSequence(
    ['clean'], ['copy', 'js', 'css', 'replace'], callback
  );
});

gulp.task('clean', function(callback) {
  del(['./dist/'], callback);
});

gulp.task('copy', function() {
  gulp.src(['./src/images*/**.*'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
  gulp.src(['./src/js/**/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
  gulp.src(['./src/css/normalize*.css', './src/css/**/*.css'])
    .pipe(concat('all.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('replace', function() {
  gulp.src(['./src/index.html'])
    .pipe(replace('@@grunt.css', '<link rel="stylesheet" href="css/all.min.css" />'))
    .pipe(replace('@@grunt.js', '<script src="js/all.min.js"></script>'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './dist/',
      middleware: []
    },
    port: 5000
  })
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.*'], {
    debounceDelay: 2000
  }, ['reload-all']);
});

gulp.task('reload-all', function() {
  runSequence('build', function() {
    browserSync.reload();
  });
});