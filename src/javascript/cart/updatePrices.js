const cartImgCounter = document.querySelector('.cart')
const fullPrice = document.querySelector('.full-price')
const youSave = document.querySelector('.you-save')
const firstLineAmount = document.querySelector('.first-line-amount')

const updatePrices = () => {
  cartImgCounter.style.setProperty(
    '--content',
    `'${localStorage['cartQuantity']}'`
  )
  fullPrice.innerText = `${3799 * localStorage['cartQuantity']},00 zł`
  youSave.innerText = `${200 * localStorage['cartQuantity']} zł`
  firstLineAmount.innerText = `Koszyk (${localStorage['cartQuantity']})`
}

export default updatePrices
