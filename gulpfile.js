/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

'use strict';

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    merge = require('merge2'),
    uglify = require("gulp-uglify"),
    tsProject = tsc.createProject('tsconfig.json');

var paths = {
    webroot: "./wwwroot/",
    clientroot: "./client/"
};

paths.tsOutputPath = paths.webroot + '/js';
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.concatJsDest = paths.webroot + "js/site.min.js";
paths.allTypeScript = paths.clientroot + '/**/*.ts';
paths.typings = './typings/';
paths.libraryTypeScriptDefinitions = './typings/**/*.ts';

gulp.task('compile:ts', function () {
    var sourceTsFiles = [paths.allTypeScript,                //path to typescript files
                         paths.libraryTypeScriptDefinitions]; //reference to library .d.ts files


    var tsResult = gulp.src(sourceTsFiles)
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tsProject));


    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest(paths.tsOutputPath )),
        tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest(paths.tsOutputPath))
    ]);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});


gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

