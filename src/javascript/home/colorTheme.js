const darkMode = () => {
  const root = document.querySelector(':root')
  const lightModeBtn = document.querySelector('.light')
  const darkModeBtn = document.querySelector('.dark')

  const toggleActiveButton = () => {
    darkModeBtn.classList.toggle('active')
    lightModeBtn.classList.toggle('active')
  }

  const setTheme = (color) => {
    if (color === 'dark') {
      root.style.setProperty('--background', 'rgb(61, 61, 61)')
      root.style.setProperty('--text', 'rgb(230, 230, 230)')
      root.style.setProperty('--text-black', 'rgb(255, 255, 255)')
      root.style.setProperty('--text-white', 'rgb(0, 0, 0)')
      root.style.setProperty('--text-gray', 'rgb(168, 168, 168)')
      root.style.setProperty('--header', 'rgb(45, 45, 45)')
      root.style.setProperty('--gray1', 'rgb(42, 42, 42)')
      root.style.setProperty('--gray2', 'rgb(101, 101, 101)')
      root.style.setProperty('--gray3', 'rgb(153, 153, 153)')
      root.style.setProperty('--gray4', 'rgb(210, 210, 210)')
      root.style.setProperty('--card-shadow', 'rgb(255, 255, 255)')
    } else if (color === 'light') {
      root.style.setProperty('--background', 'white')
      root.style.setProperty('--text', 'rgb(26, 26, 26)')
      root.style.setProperty('--text-black', 'rgb(0, 0, 0)')
      root.style.setProperty('--text-white', 'rgb(255, 255, 255)')
      root.style.setProperty('--text-gray', 'rgb(112, 112, 112)')
      root.style.setProperty('--header', 'rgb(245, 245, 245)')
      root.style.setProperty('--gray1', 'rgb(220, 220, 220)')
      root.style.setProperty('--gray2', 'rgb(159, 159, 159)')
      root.style.setProperty('--gray3', 'rgb(112, 112, 112)')
      root.style.setProperty('--gray4', 'rgb(60, 60, 60)')
      root.style.setProperty('--card-shadow', 'rgb(66, 68, 90)')
    }
  }

  if (localStorage['colorTheme'] == null) {
    localStorage.setItem('colorTheme', 'light')
  } else if (localStorage['colorTheme'] == 'dark') {
    toggleActiveButton()
    setTheme('dark')
  }

  darkModeBtn.addEventListener('click', () => {
    toggleActiveButton()
    setTheme('dark')
    localStorage.setItem('colorTheme', 'dark')
  })

  lightModeBtn.addEventListener('click', () => {
    toggleActiveButton()
    setTheme('light')
    localStorage.setItem('colorTheme', 'light')
  })
}

export default darkMode
