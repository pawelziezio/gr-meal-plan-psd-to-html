const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('default', () =>
    gulp.src('js/script.js')
        .pipe(babel({
            presets: ["es2015-node5"]
        }))
        .pipe(gulp.dest('prod/js'))
);

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['default']);
});