document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded!');
  document.querySelector('#hamburger').addEventListener('click', toggleBurger);
});

const toggleBurger = () => {
  const nav = document.querySelector('nav');

  if (!nav) return;

  if (!nav.classList.contains('hidden')) {
    setTimeout(() => {
      nav.classList.toggle('hidden');
      nav.classList.remove('slide-out');
    }, 300);
    nav.classList.add('slide-out');
  } else {
    setTimeout(() => {
      nav.classList.remove('slide-in');
    }, 300);
    nav.classList.add('slide-in');
    nav.classList.toggle('hidden');
  }
}