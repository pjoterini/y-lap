const isCartEmpty = () => {
  const cartImgCounter = document.querySelector('.cart')

  cartImgCounter.style.setProperty(
    '--content',
    `'${localStorage['cartQuantity']}'`
  )

  if (localStorage['cartQuantity'] > 0) {
    cartImgCounter.style.setProperty('--visible', 'visible')
  }
}

export default isCartEmpty
