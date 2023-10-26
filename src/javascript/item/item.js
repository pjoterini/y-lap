const item = () => {
  const addToCartBtn = document.querySelector('.add-to-cart-btn')
  const itemQuantityCart = document.querySelector('.item-quantity-cart')
  const cartImgCounter = document.querySelector('.cart')
  const modal = document.querySelector('.modal')

  let cartImgCounterAfter = window.getComputedStyle(cartImgCounter, '::after')

  cartImgCounter.style.setProperty(
    '--content',
    `'${localStorage['cartQuantity']}'`
  )

  if (localStorage['cartQuantity'] > 0) {
    cartImgCounter.style.setProperty('--visible', 'visible')
  }

  addToCartBtn.addEventListener('click', () => {
    modal.classList.add('opacity')
    setTimeout(opacityDown, 2000)

    function opacityDown() {
      modal.classList.remove('opacity')
    }

    localStorage['cartQuantity']++

    if (localStorage['cartQuantity'] > 10) {
      localStorage['cartQuantity'] = 10
    }

    cartImgCounter.style.setProperty(
      '--content',
      `'${localStorage['cartQuantity']}'`
    )

    cartImgCounter.style.setProperty('--visible', 'visible')
  })
}

export default item
