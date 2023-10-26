const burgerMenu = () => {
  const hamburgerMenuBtn = document.querySelector('.hamburger-menu')
  const headerMenuItems = document.querySelector('.header-menu-items')

  hamburgerMenuBtn.addEventListener('click', () => {
    hamburgerMenuBtn.classList.toggle('hamburger-active')
    headerMenuItems.classList.toggle('small-device')
  })
}

export default burgerMenu
