var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


/*
    ===========================
    BASE TASKS
    ===========================
*/
var tasks = {
    server: function(path){
        return function(){
            browserSync.init({
                server: {
                    baseDir: path
                }
            });
        };
    },
    
    copy: function(path, dist){
        return function(){
            return gulp.src(path)
                .pipe(gulp.dest(dist));
        }
    },
    
    clean: function(path){
        return function() {
            return gulp.src(path).pipe(clean());
        };
    },
    
    css: function(mode, path, dist){
        return function() {
            var stream = gulp.src(path).pipe(sass()).on('error', utils.swallowError);
            
            if( mode !== 'dev' ){
                stream = stream.pipe(cssmin());
            }
            
            return stream.pipe(gulp.dest(dist)).pipe(browserSync.stream());
        };
    },
    
    js: function(mode, path, dist){
        return function() {
            var stream = gulp.src(path).pipe(concat('app.js'));
                
                if( mode !== 'dev' ){
                    stream = stream.pipe(uglify()).on('error', utils.swallowError);
                }
            
            return stream.pipe(gulp.dest(dist));
        };
    },
    
    reload: function(){
        return function(){
            reload();
        }
    },
    
    watch: function(){
        return function(){
            var html = gulp.watch('./src/*.html', function(){
                runSequence('dev-copy', 'reload');
            });
            
            var js = gulp.watch('./src/js/**/*.js', function(){
                runSequence('dev-js', 'reload');
            });
            
            var css = gulp.watch('./src/scss/**/*.scss', function(){
                runSequence('dev-css', 'reload');
            });
            
            html.on('change', function(event) {
              console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            });
            
            js.on('change', function(event) {
              console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            });
            
            css.on('change', function(event) {
              console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
            });
        };
    }
};


/*
    ===========================
    UTILS FUNCTIONS
    ===========================
*/
var utils = {
	swallowError: function(error) {
		console.log(error.toString());
		utils.alert(error.toString());
		this.emit('end');
	},

	alert: function(msg){
		gulp.src('./src').pipe(notify(msg));
	},
    jsOrder: [
        './src/js/libs/**/*.js',
        './src/js/app.js',
        './src/js/control/**/*.js',
        './src/js/model/**/*.js',
        './src/js/view/**/*.js',
    ]
};



/*
    ===========================
    GENERIC TASKS
    ===========================
*/
gulp.task('reload', tasks.reload());
gulp.task('watch', tasks.watch());
gulp.task('clean', tasks.clean(['./dist', './build']));



/*
    ===========================
    DIST TASKS
    ===========================
*/
gulp.task('server', tasks.server('./dist'));
gulp.task('copy', tasks.copy('./src/*.html', './dist'));
gulp.task('css', tasks.css(['./src/scss/**/*.scss'], './dist/css'));
gulp.task('js', tasks.js(utils.jsOrder, './dist/js/'));

gulp.task('dist', function(){
    runSequence('clean', 'copy', 'js', 'css', 'server');
});


/*
    ===========================
    DEV TASKS
    ===========================
*/
gulp.task('dev-server', tasks.server('./build'));
gulp.task('dev-copy', tasks.copy('./src/*.html', './build'));
gulp.task('dev-css', tasks.css('dev', ['./src/scss/**/*.scss'], './build/css'));
gulp.task('dev-js', tasks.js('dev', utils.jsOrder,'./build/js/'));

gulp.task('default', function(){
    runSequence('clean', 'dev-copy', 'dev-js', 'dev-css', 'watch', 'dev-server');
});