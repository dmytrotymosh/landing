let burger = document.querySelector('.header-burger-handler');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuItem = document.querySelectorAll('.mobile-navbar-menu-item');
burger.addEventListener('click', () => {
	burger.classList.toggle('header-burger-handler--active');
	mobileMenu.classList.toggle('burger-close');
})
mobileMenuItem.forEach(element => {
	element.addEventListener('click', () => {
		burger.classList.remove('header-burger-handler--active');
		mobileMenu.classList.remove('burger-close');
	})
})