//клик по кнопке. Toggle select
const burgerBtn = document.querySelector('.burger');
const mobileMenu = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', function () {
	mobileMenu.classList.toggle('header__nav--visible');
	this.classList.toggle('burger--active');
});