const form = () => {
  const formInputs = document.querySelectorAll('.form-input')
  const forms = document.querySelectorAll('form')

  formInputs.forEach((formInput) => {
    formInput.addEventListener('click', (e) => {
      e.target.parentElement.classList.add('input-active')
    })
    formInput.addEventListener('focus', (e) => {
      e.target.parentElement.classList.add('input-active')
    })

    formInput.addEventListener('focusout', (e) => {
      if (formInput.value === '') {
        e.target.parentElement.classList.remove('input-active')
      }
    })
  })
}

export default form
