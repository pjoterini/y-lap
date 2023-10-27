const submitButton = document.querySelector('.btn-end')
const thankYouModal = document.querySelector('.thank-you-modal')

const submitButtonEventListener = () => {
  submitButton.addEventListener('click', () => {
    thankYouModal.classList.remove('hide')
    localStorage.setItem('cartQuantity', '0')
  })
}

export default submitButtonEventListener
