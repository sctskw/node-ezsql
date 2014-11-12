var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('coffee-script/register');


//autoload plugins from node_modules
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var src = {
  'test': {
    src: 'tests/*.coffee',
    runner: {
      exec: plugins.mocha,
      config: {
        reporter: 'spec'
      }
    },
    watch: {
      src: [
        'tests/**/*.coffee',
        'lib/**/*.js'
      ],
      exec: [
        'test'
      ]
    }
  }
};

gulp.task('default', function() {
  gulp.run('test');
  gulp.run('watch');
});

gulp.task('test', function() {
  return gulp.src(src.test.src, {read: false})
    .pipe(src.test.runner.exec(src.test.runner.config));
    // .on('error',  gutil.log);
});

gulp.task('watch', function() {
  gulp.watch(src.test.watch.src, src.test.watch.exec);
});

