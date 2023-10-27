import './index.scss'
import colorTheme from './javascript/home/colorTheme'
import initializeLocalStorage from './javascript/home/initializeLocalStorage'
import isCartEmpty from './javascript/home/isCartEmpty'
import searchBar from './javascript/home/searchBar'
import burgerMenu from './javascript/home/burgerMenu'
import whyPopup from './javascript/home/whyPopup'

const globals = () => {
  colorTheme()
  initializeLocalStorage()
  isCartEmpty()
  searchBar()
  burgerMenu()
  whyPopup()
}

// HOME
import slider from './javascript/home/slider'
import timer from './javascript/home/timer'

if (document.querySelector('.slider')) {
  globals()
  slider()
  timer()
}

// ITEM
import addItemToCart from './javascript/item/addItemToCart'

if (document.querySelector('.item-main')) {
  globals()
  addItemToCart()
}

// CART
import cart from './javascript/cart/cart'

if (document.querySelector('.koszyk')) {
  globals()
  cart()
}

// DELIVERY OPTIONS
import calculateFinalPrices from './javascript/deliveryOptions/calculateFinalPrices'
import deliveryForm from './javascript/deliveryOptions/deliveryForm'
import deliveryRadioButtons from './javascript/deliveryOptions/deliveryRadioButtons'
import submitButtonEventListener from './javascript/deliveryOptions/submitButton'

if (document.querySelector('.dostawa-main')) {
  colorTheme()
  calculateFinalPrices()
  deliveryForm()
  deliveryRadioButtons()
  submitButtonEventListener()
}
