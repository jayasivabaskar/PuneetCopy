var gulp = require('gulp');

gulp.task('task1', function(){
    console.log('Running task 1')
})

gulp.task('task2', ['task1'], function(){
    console.log('Running task 2')
})

gulp.task('copyhtml', function(){
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'))
})

