var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
;

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './app'
        },
        notify: false
    });
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));