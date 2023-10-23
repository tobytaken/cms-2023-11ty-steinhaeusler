// import * as MainNav from './lib/mainnav.js';
// window.MainNav = MainNav;

document.addEventListener('DOMContentLoaded', () => {
  console.log('Script loaded!');
});

const toggleBurger = () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('hidden');
}