import webp from "gulp-webp";
import imagemin from "gulp-imagemin"

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(app.plugins.newer(app.path.build.images)) // Обработка новых и изменененных картинок
		.pipe(
			app.plugins.if(
				app.isBuild,
				webp()
			)
		) // Создание WebP картинок
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.dest(app.path.build.images)
			)
		) // Выгружаем в папку с результатом
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.gulp.src(app.path.src.images)
			)
		) // Снова получам папку с исходиниками
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.newer(app.path.build.images)
			)
		) // И проверяем обновления
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLavel: 3 // 0 to 7
				})
			)
		) // Сжатие
		.pipe(app.gulp.dest(app.path.build.images)) // Куда переносим
		.pipe(app.gulp.src(app.path.src.svg)) // Получаем доступ к SVG изображениям
		.pipe(app.gulp.dest(app.path.build.images)) // Копируем в папку с результатом
		.pipe(app.plugins.browsersync.stream()); //обновляем
}