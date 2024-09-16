// footer
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `Submission: Tugas Akhir Membuat Website &#169;${currentYear}, Danny Himawan`;

// button
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.innerHTML = 'Lihat Kamar Ini';
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function (event) {
  event.stopPropagation();
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.addEventListener('click', function (event) {
  if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  }
});

let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const navLinksItems = navLinks.querySelectorAll('a');
navLinksItems.forEach((link) => {
  link.addEventListener('click', function () {
    if (hamburger.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
});
