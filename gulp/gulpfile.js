var gulp = require('gulp');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    htmlmin  = require('gulp-htmlmin');


function buildJS() {
  return gulp.src([])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
}

function buildHTML(){
   return gulp.src(['src/main.html'])    
    .pipe(htmlmin({collapseWhitespace: true})) 
    .pipe(concat('index.html'))
    .pipe(gulp.dest('dist')) 
}

gulp.task('default',function(){
    buildJS();    
    buildHTML();
});



