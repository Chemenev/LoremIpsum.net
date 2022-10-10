export const copy = () => {
	return app.gulp.src(app.path.src.files) // Обращаемся к переменной app далее path.src.files
		.pipe(app.gulp.dest(app.path.build.files)) // Куда переносим
}