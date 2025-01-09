const menu = document.querySelector('.nav');
const burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', () => {
  menu.classList.toggle('nav--active');
  burgerButton.classList.toggle('burger-button--active');
});
