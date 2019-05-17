"use strict";

// Читаем содержимое package.json в константу
const pjson = require("./package.json");
// Получим из константы другую константу с адресами папок сборки и исходников
const dirs = pjson.config.directories;

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglify");
var include = require("posthtml-include");
var imagemin = require("gulp-imagemin");
var imageminWebp = require('imagemin-webp');
var extReplace = require("gulp-ext-replace");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var svgo = require("gulp-svgo");
var webp = require("gulp-webp");
var del = require("del");
var run = require("run-sequence");
var concat = require("gulp-concat");
var spritesmith = require("gulp.spritesmith");
var fileinclude = require("gulp-file-include");
var replace = require("gulp-replace");
var babel = require("gulp-babel");

gulp.task("clean", function () {
  return del("build");
});

// ЗАДАЧА: Сборка HTML
gulp.task("html", function () {
  return gulp.src("source/**/*.html")
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: "@@",
      basepath: "@file",
      indent: true,
    }))
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, "")) // убираем комментарии <!--DEV ... -->
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("style", function () {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({
        browsers: ['last 30 versions']
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg,webp}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});


gulp.task("sprite", function () {
  return (
    gulp
      .src("source/img/icons/icon-*.svg")
      .pipe(plumber())
      .pipe(
        svgo({
          plugins: [
            {
              removeAttrs: { attrs: ["fill", "fill-rule", "stroke", "style"] }
            }
          ]
        })
      )
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest("build/img"))
  );
});

gulp.task("sprite-png", function () {
  var fileName = "sprite-png.png";
  var spriteData =
    gulp.src("source/img/icons/*.png")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      })
    ]))
    .pipe(spritesmith({
      imgName: fileName,
      cssName: "sprite-png.scss",
      algorithm: "diagonal",
      cssFormat: "scss",
      padding: 10,
      imgPath: "../img/" + fileName
    }));

  spriteData.img.pipe(gulp.dest("build/img/"));
  spriteData.css.pipe(gulp.dest("source/sass/"));

  return spriteData;
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(imagemin([
      imageminWebp({
        quality: 90
      })
    ]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html-2", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("build"));
});

gulp.task("vendor", function () {
  gulp
    .src([
      "source/js/libs/picturefill.min.js",
      "source/js/libs/svg4everybody.min.js"
    ])
    .pipe(concat("vendor.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("js-main", function () {
  gulp
    .src([
      "source/js/tabs-2.js",
      "source/js/popup.1.js",
      "source/js/bl-controls.js"
    ])
    .pipe(concat("main.min.js"))
    .pipe(
      uglify({
        mangle: false
      })
    )
    .pipe(gulp.dest("build/js"));
});

gulp.task("js-controls", function() {
  gulp
    .src([
      "source/js/bl-controls.js"
    ])
    .pipe(concat("controls.min.js"))
    .pipe(
      uglify({
        mangle: false
      })
    )
    .pipe(gulp.dest("build/js"));
});

gulp.task("js-tabs", function() {
  gulp
    .src([
      "source/js/tabs-2.js"
    ])
    .pipe(concat("tabs.min.js"))
    .pipe(
      uglify({
        mangle: false
      })
    )
    .pipe(gulp.dest("build/js"));
});

gulp.task("js-popup", function() {
  gulp
    .src([
      // "source/js/popup.js",
      "source/js/popup.1.js"
    ])
    .pipe(concat("popup.min.js"))
    .pipe(
      uglify({
        mangle: false
      })
    )
    .pipe(gulp.dest("build/js"));
});



gulp.task("serve", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch(
    "source/js/**/*.js",
    ["js-main"],
    ["js-tabs"],
    ["js-popup"],
    ["js-controls"]
  );
  gulp.watch("source/**/*.html", ["html"]).on("change", server.reload);
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "images",
    "style",
    "sprite",
    "html",
    "vendor",
    "js-main",
    "js-tabs",
    "js-popup",
    "js-controls",
    done
  );
});
