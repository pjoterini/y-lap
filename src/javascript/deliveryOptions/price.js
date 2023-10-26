const price = () => {
  let sztuka = document.querySelector('.sztuka')
  let beforePrice = document.querySelectorAll('.before-price')
  let afterPrice = document.querySelectorAll('.after-price')
  let save = document.querySelector('.save')

  beforePrice.forEach((price) => {
    price.innerText = `${3999 * localStorage['cartQuantity']},00 zł`
  })
  afterPrice.forEach((price) => {
    price.innerText = `${3799 * localStorage['cartQuantity']},00 zł`
  })

  sztuka.innerText = `(${localStorage['cartQuantity']}) szt.`
  save.innerText = `${200 * localStorage['cartQuantity']} zł`
}

export default price
