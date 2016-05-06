var gulp = require('gulp'),
    sync = require('run-sequence'),
    serve = require('browser-sync')
var gutil = require('gulp-util')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var webConfig = require('./webpack.config.js')

var paths = {
    app: ['client/**/*.{js,css,html}']
}

gulp.task('serve', function() {
    serve({
        port: 3000,
        open: false,
        server: {
            baseDir: 'client'
        }
    })
})

gulp.task('webpack', function(callback) {
    // run webpack
    webpack(webConfig, function(err, stats) {
        if (err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack]', stats.toString({
            // output options
        }))
        callback()
    })
})

gulp.task('watch', function() {
    gulp.watch(paths.app, ['webpack', serve.reload])
})

gulp.task('default', function(done) {
    sync('webpack', 'serve', 'watch', done)
})
