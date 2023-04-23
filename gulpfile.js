const gulp = require("gulp");
const webp = require("gulp-webp");

exports.default = () =>
  gulp.src("images/*.jpg").pipe(webp()).pipe(gulp.dest("dist/images/"));
