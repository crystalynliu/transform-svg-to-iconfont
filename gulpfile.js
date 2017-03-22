var gulp = require('gulp');
var consolidate = require('gulp-consolidate');
var iconfont = require('gulp-iconfont');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var fontOptions = require('./package.json')['font-options'];
var fontFamilyName = fontOptions.fontFamilyName;
var classPrefix = fontOptions.fontPrefix;

gulp.task('iconfont', function () {
  return gulp.src('src/icon/*.svg')
    .pipe(iconfont({
      fontName: fontFamilyName,
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

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    port: 8000
  });
});

gulp.task('watch', function () {
  watch('src/icon/*.svg', function () {
    gulp.start('iconfont');
  })
  watch('dist/*.html').on('change', browserSync.reload);
})

gulp.task('server', ['watch', 'iconfont', 'browserSync']);