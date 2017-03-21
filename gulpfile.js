var gulp = require('gulp');
var consolidate = require('gulp-consolidate');
var iconfont = require('gulp-iconfont');
var webserver = require('gulp-webserver');
var classPrefix = require('./package.json')['font-prefix'];

gulp.task('iconfont', function () {
  return gulp.src('src/icon/*.svg')
    .pipe(iconfont({
      fontName: 'iconfont',
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      appendCodepoints: true,
      appendUnicode: false,
      normalize: true,
      fontHeight: 1000,
      centerHorizontally: true
    }))
    .on('glyphs', function (glyphs, options) {
      gulp.src('src/iconfont.css')
          .pipe(consolidate('underscore', {
            glyphs: glyphs,
            prefix: classPrefix,
            fontName: options.fontName,
            fontDate: new Date().getTime()
          }))
          .pipe(gulp.dest('dist/'));

      gulp.src('src/index.html')
        .pipe(consolidate('underscore', {
          glyphs: glyphs,
          prefix: classPrefix,
          fontName: options.fontName
        }))
        .pipe(gulp.dest('dist/'));
    })
    .pipe(gulp.dest('dist/font'));
});

gulp.task('webServer', function () {
  return gulp.src('dist')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      open: true
    }))
})

gulp.task('server', ['iconfont', 'webServer']);