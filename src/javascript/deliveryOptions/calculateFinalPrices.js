const sztuka = document.querySelector('.sztuka')
const beforePrices = document.querySelectorAll('.before-price')
const afterPrices = document.querySelectorAll('.after-price')
const save = document.querySelector('.save')

const calculateFinalPrices = () => {
  beforePrices.forEach((price) => {
    price.innerText = `${3999 * localStorage['cartQuantity']},00 zł`
  })
  afterPrices.forEach((price) => {
    price.innerText = `${3799 * localStorage['cartQuantity']},00 zł`
  })

  sztuka.innerText = `(${localStorage['cartQuantity']}) szt.`
  save.innerText = `${200 * localStorage['cartQuantity']} zł`
}

export default calculateFinalPrices
