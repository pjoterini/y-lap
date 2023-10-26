const whyPopup = () => {
  let openWhyBtn = document.querySelector('.open-why-btn')
  let whyCart = document.querySelector('.why-cart')

  openWhyBtn.addEventListener('click', () => {
    openWhyBtn.classList.add('hidden')
    whyCart.classList.remove('hidden')
  })

  whyCart.addEventListener('click', () => {
    whyCart.classList.add('hidden')
    openWhyBtn.classList.remove('hidden')
  })
}

export default whyPopup
