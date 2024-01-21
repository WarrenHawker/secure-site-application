const main = document.getElementById('main');
const aside = document.getElementById('aside');
const sideNavButtons = [...document.getElementsByClassName('side-nav-item')];
const asideText = document.getElementById('aside-text');

sideNavButtons.forEach((button) => {
  button.addEventListener('click', () => {
    main.classList.toggle('mobile-text-show');
    aside.classList.toggle('mobile-text-show');
    asideText.classList.toggle('show');
  });
});
