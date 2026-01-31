// მობილური მენიუს ღილაკი
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('header nav');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('რეგისტრაცია  შესრულდა');
    registerForm.reset();
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('მესიჯი გაგზავნილია ');
    contactForm.reset();
});
