var gulp = require('gulp');

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', async function () {
  await gulp.src([
    'node_modules/bootstrap/dist/**/*',
    '!**/npm.js',
    '!**/bootstrap-theme.*',
    '!**/*.map'
  ])
    .pipe(gulp.dest('assets/vendor/bootstrap'))

  await gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('assets/vendor/jquery'))

  await gulp.src(['node_modules/jquery.easing/*.js'])
    .pipe(gulp.dest('assets/vendor/jquery-easing'))

  await gulp.src([
    'node_modules/font-awesome/**',
    '!node_modules/font-awesome/**/*.map',
    '!node_modules/font-awesome/.npmignore',
    '!node_modules/font-awesome/*.txt',
    '!node_modules/font-awesome/*.md',
    '!node_modules/font-awesome/*.json'
  ])
    .pipe(gulp.dest('assets/vendor/font-awesome'))

  await gulp.src(['node_modules/simple-line-icons/*/*'])
    .pipe(gulp.dest('assets/vendor/simple-line-icons'))

  await gulp.src([
    'node_modules/slick-carousel/slick/**',
    '!node_modules/slick-carousel/slick/config.rb',
    '!node_modules/slick-carousel/slick/*.scss',
    '!node_modules/slick-carousel/slick/*.less'
  ])
    .pipe(gulp.dest('assets/vendor/slick-carousel'))
})

// Default task
gulp.task('default', gulp.series('copy'));