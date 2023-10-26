const initializeLocalStorage = () => {
  if (localStorage['cartQuantity'] == null) {
    localStorage.setItem('cartQuantity', '0')
  }
}

export default initializeLocalStorage
