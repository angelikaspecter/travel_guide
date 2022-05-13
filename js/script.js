window.addEventListener('scroll', () => {
	const upButton = document.querySelector('.footer__up');
	if (window.pageYOffset > 100) {
		upButton.classList.add('footer__up--showed');
	} else {
		setTimeout(() => upButton.classList.remove('footer__up--showed'), 300);
	}
});