const submitButton = document.querySelector('.btn-end')
const thankYouModal = document.querySelector('.thank-you-modal')

submitButton.addEventListener('click', () => {
  thankYouModal.classList.remove('hide')
  localStorage.setItem('cartQuantity', '0')
})
