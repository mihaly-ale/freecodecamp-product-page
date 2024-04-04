const navbar = document.getElementById('nav-bar');
const lastPosition = 0;

window.addEventListener('scroll', () => {
	const newPosition = window.pageYOffset;
	console.log(newPosition);

	if (newPosition > lastPosition) {
		document.body.classList.add('hidden');
	}

	if (
		newPosition === lastPosition &&
		document.body.classList.contains('hidden')
	) {
		document.body.classList.remove('hidden');
	}
});

// nav-toggle
const navToggle = document.getElementById('nav-toggle');

const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('show');
});

// contact bar scrolling setup
const contactBarTopLinks = document.getElementById('top-contact-bar_links');
let lastScroll = 0;

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	if (
		currentScroll <= 0 &&
		contactBarTopLinks.classList.contains('top-contact-bar_scrolling')
	) {
		contactBarTopLinks.classList.remove('top-contact-bar_scrolling');
		return;
	}

	if (currentScroll < lastScroll) {
		contactBarTopLinks.classList.add('top-contact-bar_scrolling');
	}

	if (currentScroll > lastScroll) {
		contactBarTopLinks.classList.remove('top-contact-bar_scrolling');
	}

	lastScroll = currentScroll;
});
