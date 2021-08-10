const openBurgerBtn = document.querySelector('#burger-open')
const closeBurgerBtn = document.querySelector('#burger-close')
const burgerLinks = document.querySelector('#burger-links')
const bodyHTML = document.querySelector('body');

openBurgerBtn.addEventListener('click', () => {
  openBurgerBtn.classList.toggle('toggle-display')
  closeBurgerBtn.classList.toggle('toggle-display')
  bodyHTML.classList.toggle('no-scroll')

  if (burgerLinks.classList.contains('fade-in')) {
    burgerLinks.classList.remove('fade-in')
    burgerLinks.classList.add('fade-out')
  } else {
    burgerLinks.classList.add('fade-in')
    burgerLinks.classList.remove('fade-out')
  }
})

closeBurgerBtn.addEventListener('click', () => {
  openBurgerBtn.classList.toggle('toggle-display')
  closeBurgerBtn.classList.toggle('toggle-display')
  bodyHTML.classList.toggle('no-scroll')

  if (burgerLinks.classList.contains('fade-in')) {
    burgerLinks.classList.remove('fade-in')
    burgerLinks.classList.add('fade-out')
  } else {
    burgerLinks.classList.add('fade-in')
    burgerLinks.classList.remove('fade-out')
  }
})