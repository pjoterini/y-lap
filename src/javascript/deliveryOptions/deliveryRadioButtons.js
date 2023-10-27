const radioButtons = () => {
  const radioBtns = document.querySelectorAll('.radio-btn-input')
  const checkBoxes = document.querySelectorAll('.check-box')
  const radioBtns2 = document.querySelectorAll('.i2')
  const checkBoxes2 = document.querySelectorAll('.cb2')

  radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener('click', (e) => {
      checkBoxes.forEach((checkBox) => {
        if (checkBox.classList.contains('check-box-clicked')) {
          checkBox.classList.remove('check-box-clicked')
          e.target.parentElement.parentElement.parentElement.classList.add(
            'check-box-clicked'
          )
        }
      })
    })
  })

  radioBtns2.forEach((radioBtn) => {
    radioBtn.addEventListener('click', (e) => {
      checkBoxes2.forEach((checkBox) => {
        if (checkBox.classList.contains('check-box-clicked-2')) {
          checkBox.classList.remove('check-box-clicked-2')
          e.target.parentElement.parentElement.parentElement.classList.add(
            'check-box-clicked-2'
          )
        }
      })
    })
  })
}

export default radioButtons
