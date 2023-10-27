const addItemToCart = () => {
  const cartImgCounter = document.querySelector('.cart')
  const modal = document.querySelector('.added-item-modal')
  const addToCartBtn = document.querySelector('.add-to-cart-btn')

  const hideModal = () => {
    modal.classList.remove('opacity')
  }
  const showModal = () => {
    modal.classList.add('opacity')
  }

  addToCartBtn.addEventListener('click', () => {
    showModal()
    setTimeout(hideModal, 2000)

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

export default addItemToCart
