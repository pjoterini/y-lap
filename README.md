# y-lap

[Prototype website link](https://www.x-kom.pl/)

[Website preview](https://xkom-clone.vercel.app/)

## Description

E-commerce store with pixel-perfect UI copy of the prototype.
Data is mostly hardcoded. No libraries were used for JavaScript features, all of these are custom.

- darkmode
- searchbar
- on-click popup
- on-click ad's slider
- timer

## Navigation - JS features

MAIN PAGE:

Clicking on any item in "Polecamy" section will open item page with hardcoded informations.

ITEM PAGE:

Clicking on "Dodaj do koszyka" button will increase cart value stored in **Local Memory**.
Cart icon opens next page.

CART PAGE:

Here You can:

- change amount via input element
- clear cart amount
- go back to main with "Wróć do zakupów" button
- go to delivery details if cart is not empty

DELIVERY PAGE:

This page contains various custom form elements.
Clicking on order button will set cart value to 0 and display modal which takes You back to main page.

## STACK

HTML • SCSS • Vanilla JavaScript 
