import './index.scss'
import burgerMenu from './javascript/home/burgerMenu'
import colorTheme from './javascript/home/colorTheme'
import initializeLocalStorage from './javascript/home/initializeLocalStorage'
import isCartEmpty from './javascript/home/isCartEmpty'
import searchBar from './javascript/home/searchBar'
import timer from './javascript/home/timer'
import whyPopup from './javascript/home/whyPopup'
import item from './javascript/item/item'
import radioButtons from './javascript/deliveryOptions/radioButtons'
import price from './javascript/deliveryOptions/price'
import form from './javascript/deliveryOptions/form'
import cart from './javascript/cart'
import slider from './javascript/home/slider'

// HOME

colorTheme()
initializeLocalStorage()
isCartEmpty()
searchBar()
burgerMenu()
whyPopup()
slider()
timer()

// ITEM

if (document.querySelector('.item-main')) {
  item()
}

// CART

if (document.querySelector('.koszyk')) {
  cart()
}

// DELIVERY OPTIONS

if (document.querySelector('.dostawa-main')) {
  price()
  radioButtons()
  form()
}
