'use strict';

var gulp = require('gulp');  
var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var localFilesGlob = ['./**/*']; 
var remotePath = '/public_html/blok/wp-content/themes/bloktherm/';
var args = minimist(process.argv.slice(2));
var conn = ftp.create({
    host: 'coraluka.linuxpl.info',
    user: 'coraluka',
    password: 'tonas9237',
    parallel: 5,
    log: gutil.log
});

gulp.task('deploy', function() {
    gulp.src(localFilesGlob, { base: '.', buffer: false })
        .pipe(conn.newer(remotePath))
        .pipe(conn.dest(remotePath));
});

gulp.task('ftp-deploy-watch', function() {
    gulp.watch(localFilesGlob)
    .on('change', function(event) {
      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remotePath ) ) // only upload newer files 
        .pipe( conn.dest( remotePath ) )
      ;
    });
});
