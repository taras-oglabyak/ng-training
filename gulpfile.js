var gulp = require('gulp');

var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var gp_cssmin = require('gulp-cssmin');

gulp.task('lint', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('js-min', function(){
    return gulp.src(
             ['js/**/*.js',
              'bower_components/angular/angular.js',
              'bower_components/angular-route/angular-route.js',
              'bower_components/angular-growl-v2/build/angular-growl.js',
              'bower_components/angularUtils-pagination/dirPagination.js'])
        .pipe(gp_concat('main.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css-concat', function(){
    return gulp.src(
             ['bower_components/angular-growl-v2/build/angular-growl.css',
              'bower_components/bootstrap/dist/css/bootstrap.css',
              'css/main.css'])
        .pipe(gp_concat('main.css'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_cssmin())
        .pipe(gulp.dest('dist'));
});

gulp.task('index-copy', function () {
     gulp
      .src('index-prod.html')
      .pipe(gp_rename('index.html'))
      .pipe(gulp.dest('dist'));
});

gulp.task('build', ['js-min', 'css-concat', 'index-copy']);