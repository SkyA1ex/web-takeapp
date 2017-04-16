var gulp         = require('gulp'), // Подключаем Gulp
    stylus       = require('gulp-stylus'), //Подключаем Sylus пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    liveServer   = require("live-server"), // live-server
    csslint      = require('gulp-csslint'),
    uncss        = require('gulp-uncss'),
    eslint       = require('gulp-eslint');

var live_server_params = {
  port: 8082, // Set the server port. Defaults to 8080.
  host: "127.0.0.1", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: "./build", // Set root directory that's being served. Defaults to cwd.
  open: true, // When false, it won't load your browser by default.
  file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
  wait: 50, // Waits for all changes, before reloading. Defaults to 0 sec.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};



gulp.task('watch', function() {
  gulp.watch('app/css/**/*.css', ['build_styles']);
  gulp.watch('app/styl/**/*.styl', ['build_styles']);
  gulp.watch('app/*.html', ['build_html']);
  gulp.watch('app/js/**/*.js', ['build_js']);
  gulp.watch('app/img/**/*', ['build_images']);
  gulp.watch('app/fonts/**/*', ['build_fonts']);

  liveServer.start(live_server_params);
});

gulp.task('clean', function() {
  return del.sync('build');
});

gulp.task('clear', function () {
  return cache.clearAll();
})



// build tasks

gulp.task('build_styles', function() {
  del.sync('build/css');

  gulp.src('app/css/**/*.css')
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(csslint())
      .pipe(csslint.formatter())
      .pipe(gulp.dest('build/css'));

  gulp.src('app/styl/**/*.styl')
      .pipe(stylus())
      .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
      .pipe(csslint())
      // .pipe(csslint.formatter())
      .pipe(uncss({
           html: ['app/**/*.html']
      }))
      .pipe(gulp.dest('build/css'));
});

gulp.task('build_fonts', function() {
  del.sync('build/fonts')

  gulp.src('app/fonts/**/*')
      .pipe(gulp.dest('build/fonts'))
});

gulp.task('build_images', function() {
  gulp.src('app/img/**/*')
      .pipe(cache(imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      })))
      .pipe(gulp.dest('build/img'));
});

gulp.task('build_js', function() {
  del.sync('build/js')

  gulp.src('app/js/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))
});

gulp.task('build_html', function() {
  del.sync('build/html')

  gulp.src('app/*.html')
      .pipe(gulp.dest('build'));
});

// main build task

gulp.task('build', ['clean', 'build_images', 'build_fonts', 'build_styles', 'build_js', 'build_html']);



