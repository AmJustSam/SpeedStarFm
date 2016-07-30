var gulp = require('gulp');
var sync = require('browser-sync');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('default',function(){
    sync({
      server:{
        baseDir: './'
      }
    });

gulp.watch('./*.html',sync.reload)
gulp.watch(["./assets/sass/*/*.scss","./assets/sass/*.scss"],['sass']);
gulp.watch('./assets/js/*.js',['js']);

});

gulp.task('sass',function(){
  gulp.src('./assets/sass/*.scss')
  .pipe(sass())
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('./assets/css'));
})

gulp.task('js',function(){
  gulp.src('./assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./assets/js/minified-js'));
})
