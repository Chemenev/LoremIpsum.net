// Получаем имя папки
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Так же можно использовать rootFolder
const srcFolder = `./#src`;

// Вся информация о пути к папкам
export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
	}, // Объект путей к папке с результатом
	src: {
		js: `${srcFolder}/js/scripts.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`, // Путь к style.scss
		html: `${srcFolder}/*.html`, // HTML файлы
		files: `${srcFolder}/files/**/*.*`,
	}, // Объект путей к исходны файлам
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/*.scss`,
		html: `${srcFolder}/**/*.html`, // Наблюдаем за HTML файлами везде
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`,
	}, // Объект путей к исходны файлам за которыми надо следить
	clean: buildFolder,
	buildFolder: buildFolder, // Папка с результатом
	srcFolder: srcFolder,  // Папка с исходниками
	rootFolder: rootFolder, // Название текущей папки проекта
	ftp: ``
}