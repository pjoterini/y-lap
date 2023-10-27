import updatePrices from './updatePrices'
const itemQuantityInput = document.querySelector('.item-quantity-input')
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn')
const emptyCartSection = document.querySelector('.koszyk-pusty-container')
const cartSection = document.querySelector('.koszyk')
const cartIcon = document.querySelector('.cart')

const cart = () => {
  if (localStorage['cartQuantity'] == 0) {
    cartSection.classList.add('hide')
  } else if (localStorage['cartQuantity'] > 0) {
    emptyCartSection.classList.add('hide')
    itemQuantityInput.value = localStorage['cartQuantity']
    updatePrices()

    itemQuantityInput.addEventListener('change', () => {
      localStorage['cartQuantity'] = itemQuantityInput.value
      updatePrices()
    })

    itemQuantityInput.addEventListener('keypress', (e) => {
      localStorage['cartQuantity'] = itemQuantityInput.value
      if (e.keyCode === 13) {
        e.preventDefault()
        updatePrices()
      }
    })

    removeFromCartButtons.forEach((removeBtn) => {
      removeBtn.addEventListener('click', () => {
        cartSection.classList.add('hide')
        emptyCartSection.classList.remove('hide')
        localStorage['cartQuantity'] = 0
        cartIcon.style.setProperty('--visible', 'hidden')
      })
    })
  }
}

export default cart
