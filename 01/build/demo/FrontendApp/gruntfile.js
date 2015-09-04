module.exports = function(grunt) {
  //配置插件
  grunt.initConfig({
    //配置clean插件
    clean: {
      options: {
        force: false
      },
      build: ['./dist'],

      other: ['./dist/css/*.css', '!./dist/css/*.min.css', './dist/js/*.js', '!./dist/js/*.min.js']
    },
    //配置copy插件
    copy: {
      img: {
        expand: true,
        cwd: './src/images/',
        src: '*',
        dest: './dist/images/'
      },
      html: {
        expand: true,
        cwd: './src/',
        src: '*.html',
        dest: './dist/'
      }
    },
    // 配置文件合并插件
    concat: {
      css: {
        src: ['./src/css/n*.css', './src/css/*.css'],
        dest: './dist/css/all.css'
      },
      js: {
        src: ['./src/js/*.js'],
        dest: './dist/js/all.js'
      }
    },
    // 配置js压缩插件
    uglify: {
      options: {
        mangle: false
      },
      release: {
        files: {
          './dist/js/all.min.js': ['./dist/js/*.js']
        }
      }
    },
    //配置css合并插件
    cssmin: {
      release: {
        files: {
          './dist/css/all.min.css': ['./dist/css/*.css']
        }
      }
    },
    // 配置文本替换插件
    replace: {
      linkCssAndJs: {
        options: {
          patterns: [{
            match: 'grunt.css',
            replacement: '<link rel="stylesheet" href="css/all.min.css" />'
          }, {
            match: 'grunt.js',
            replacement: '<script src="js/all.min.js"></script>'
          }]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['./dist/index.html'],
          dest: './dist/'
        }]
      }
    },
    // 配置connect插件
    connect: {
      server: {
        options: {
          port: 4000,
          base: 'dist',
          hostname: '*',
          livereload: true
        }
      }
    },
    // 打开浏览器配置
    open: {
      build: {
        path: 'http://localhost:4000'
      }
    },
    // 监视文件变更
    watch: {
      js: {
        files: ['./src/js/*.js'],
        tasks: ['concat:js', 'uglify'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['./src/css/*.css'],
        tasks: ['concat:css', 'cssmin'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['./src/*.html'],
        tasks: ['copy:html', 'replace'],
        options: {
          livereload: true
        }
      }
    }
  });

  //加载所需要的插件
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 注册任务
  grunt.registerTask('default', [
    'clean:build', 'copy', 'concat',
    'uglify', 'cssmin', 'replace', 'clean:other',
    'connect', 'open', 'watch'
  ]);
};