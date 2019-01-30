const { mix } = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.setPublicPath('./');

mix
	.sass('resources/sass/styles.scss', 'assets/css/styles.css')
	.copyDirectory('resources/js', 'assets/js')
	.copyDirectory('resources/fonts', 'assets/fonts')
	.copyDirectory('resources/img', 'assets/img')
	.version()
	.options({
		processCssUrls: false,
		postCss: [tailwindcss('tailwind.js')],
	});