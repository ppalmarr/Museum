import webpack from "webpack-stream";
import rename from 'gulp-rename'; //переименовывает файлы

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %>"
      }))
    )
     .pipe(webpack({
       mode: app.isBuild ?  'production' : 'development',
       output: {
         filename: 'app.js'
       }
     }))
    // .pipe(
    //   app.plugins.if(
    //     app.isDev,rename({
    //       extname: ".min.js"
    //       })
    //   )
    // )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}
