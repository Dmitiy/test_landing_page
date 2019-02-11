import 'bootstrap-4-grid/css/grid.min.css';

(() => {
	const pageContainer = document.querySelector('.page');
	const header = document.querySelector('header');
	const main = document.querySelector('main');

	const topOfHeader = header.offsetTop;
	const helperDiv = header.offsetHeight + 'px';
	const newDiv = document.createElement('div');

	const burgerMenu = document.querySelector('.burger-menu');
	const navMenu = document.querySelector('.nav-menu');

	burgerMenu.addEventListener('click', () => {
		if (burgerMenu.classList == 'burger-menu') {
			burgerMenu.classList.add('burger-menu--close');
			navMenu.classList.add('position--fixed');
			navMenu.parentElement.className = '';
		} else {
			burgerMenu.classList.remove('burger-menu--close');
			navMenu.classList.remove('position--fixed');
			navMenu.parentElement.className =
				'col col-xl-5 col-lg-8 d-none d-sm-none d-md-none d-lg-block';
		}
	});

	newDiv.style.height = helperDiv;

	// sticky-header
	const stickyHeader = () => {
		if (window.scrollY > topOfHeader) {
			pageContainer.classList.add('position--relative');
			pageContainer.insertBefore(newDiv, main);
			header.classList.add('position--fixed');
		} else {
			pageContainer.classList.remove('position--relative');
			pageContainer.removeChild(newDiv);
			header.classList.remove('position--fixed');
		}
	};

	window.addEventListener('scroll', stickyHeader);
})();