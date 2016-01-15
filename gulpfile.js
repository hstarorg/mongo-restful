'use strict';
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var developServer = require('gulp-develop-server');

gulp.task('default', (callback) => runSequence(['clean'], ['copy'], ['serve', 'watch']));

//清理dist目录
gulp.task('clean', (callback) => del(['./dist/'], callback));

//复制文件
gulp.task('copy', () => gulp.src('./src/**/*').pipe(gulp.dest('./dist/')));

//启动node
gulp.task('serve', () => developServer.listen({path: './dist/index.js'}));

//监控文件变化 
gulp.task('watch', () => gulp.watch('src/**/*', ['reload']));

gulp.task('reload', (callback) => runSequence('copy', 'restart', callback));

gulp.task('restart', () => developServer.restart());