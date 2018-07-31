// // generated on 2018-07-28 using generator-webapp 3.0.1
const gulp = require('gulp');
// const gulpLoadPlugins = require('gulp-load-plugins');
// const browserify = require('browserify');
// const browserSync = require('browser-sync').create();
// const del = require('del');
// const wiredep = require('wiredep').stream;
// const runSequence = require('run-sequence');
const sass = require('gulp-sass');

// const $ = gulpLoadPlugins();
// const reload = browserSync.reload;

// let dev = true;


//HANDLES CSS AND SCSS FILES
gulp.task ('sass', ()=> { //gulp task to compile scss into css
  return gulp.src('app/scss/styles.scss')//the source files of scss
  .pipe(sass())//use gulp-sass plugin
  .pipe(gulp.dest('app/css'))//destination of where I want the file the compiled file or css to go
});

//THE WATCHERS
gulp.task('watch', ()=>{
  gulp.watch('app/scss/**/*.scss', ['sass']);
});
// gulp.task('css', () => {
//   return gulp.src('app/css/*.scss')
//     .pipe($.plumber())
//     .pipe($.if(dev, $.sourcemaps.init()))
//     .pipe($.sass.sync({
//       outputStyle: 'expanded',
//       precision: 10,
//       includePaths: ['.']
//     }).on('error', $.sass.logError))
//     .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
//     .pipe($.if(dev, $.sourcemaps.write()))
//     .pipe(gulp.dest('.tmp/css'))
//     .pipe(reload({stream: true}));
// });

gulp.task('js', () => {
  console.log('JS task is running...');
  // return gulp.src('app/js/**/*.js')
  //   .pipe($.plumber())
  //   .pipe($.if(dev, $.sourcemaps.init()))
  //   .pipe($.babel())
  //   .pipe($.if(dev, $.sourcemaps.write('.')))
  //   .pipe(gulp.dest('.tmp/js'))
  //   .pipe(reload({stream: true}));
});

// function lint(files) {
//   return gulp.src(files)
//     .pipe($.eslint({ fix: true }))
//     .pipe(reload({stream: true, once: true}))
//     .pipe($.eslint.format())
//     .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
// }

// gulp.task('lint', () => {
//   return lint('app/js/**/*.js')
//     .pipe(gulp.dest('app/js'));
// });
// gulp.task('lint:test', () => {
//   return lint('test/spec/**/*.js')
//     .pipe(gulp.dest('test/spec'));
// });

// gulp.task('html', ['css', 'js'], () => {
//   return gulp.src('app/*.html')
//     .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
//     .pipe($.if(/\.js$/, $.uglify({compress: {drop_console: true}})))
//     .pipe($.if(/\.css$/, $.cssnano({safe: true, autoprefixer: false})))
//     .pipe($.if(/\.html$/, $.htmlmin({
//       collapseWhitespace: true,
//       minifyCSS: true,
//       minifyJS: {compress: {drop_console: true}},
//       processConditionalComments: true,
//       removeComments: true,
//       removeEmptyAttributes: true,
//       removeScriptTypeAttributes: true,
//       removeStyleLinkTypeAttributes: true
//     })))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('images', () => {
//   return gulp.src('app/images/**/*')
//     .pipe($.cache($.imagemin()))
//     .pipe(gulp.dest('dist/images'));
// });

// gulp.task('fonts', () => {
//   return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
//     .concat('app/fonts/**/*'))
//     .pipe($.if(dev, gulp.dest('.tmp/fonts'), gulp.dest('dist/fonts')));
// });

// gulp.task('extras', () => {
//   return gulp.src([
//     'app/*',
//     '!app/*.html'
//   ], {
//     dot: true
//   }).pipe(gulp.dest('dist'));
// });

// gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

// gulp.task('serve', () => {
//   runSequence(['clean', 'wiredep'], ['css', 'js', 'fonts'], () => {
//     browserSync.init({
//       notify: false,
//       port: 9000,
//       server: {
//         baseDir: ['.tmp', 'app'],
//         routes: {
//           '/bower_components': 'bower_components'
//         }
//       }
//     });

//     gulp.watch([
//       'app/*.html',
//       'app/images/**/*',
//       '.tmp/fonts/**/*'
//     ]).on('change', reload);

//     gulp.watch('app/css/**/*.scss', ['css']);
//     gulp.watch('app/js/**/*.js', ['js']);
//     gulp.watch('app/fonts/**/*', ['fonts']);
//     gulp.watch('bower.json', ['wiredep', 'fonts']);
//   });
// });

// gulp.task('serve:dist', ['default'], () => {
//   browserSync.init({
//     notify: false,
//     port: 9000,
//     server: {
//       baseDir: ['dist']
//     }
//   });
// });

// gulp.task('serve:test', ['js'], () => {
//   browserSync.init({
//     notify: false,
//     port: 9000,
//     ui: false,
//     server: {
//       baseDir: 'test',
//       routes: {
//         '/js': '.tmp/js',
//         '/bower_components': 'bower_components'
//       }
//     }
//   });

//   gulp.watch('app/js/**/*.js', ['js']);
//   gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
//   gulp.watch('test/spec/**/*.js', ['lint:test']);
// });

// // inject bower components
// gulp.task('wiredep', () => {
//   gulp.src('app/css/*.scss')
//     .pipe($.filter(file => file.stat && file.stat.size))
//     .pipe(wiredep({
//       ignorePath: /^(\.\.\/)+/
//     }))
//     .pipe(gulp.dest('app/css'));

//   gulp.src('app/*.html')
//     .pipe(wiredep({
//       ignorePath: /^(\.\.\/)*\.\./
//     }))
//     .pipe(gulp.dest('app'));
// });

// gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
//   return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
// });

// gulp.task('default', () => {
//   return new Promise(resolve => {
//     dev = false;
//     runSequence(['clean', 'wiredep'], 'build', resolve);
//   });
// });
