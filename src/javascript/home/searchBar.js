const searchBar = () => {
  const searchTexts = document.querySelectorAll('.search-text')
  const itemInfoContainer = document.querySelector('.item-info-container')
  const itemInfoCard = document.querySelector('[data-item-info-card')
  const searchInput = document.querySelector('[data-search]')

  searchTexts.forEach((searchText) => {
    const card = itemInfoCard.content.cloneNode(true).children[0]
    const text = card.querySelector('[data-text]')
    text.textContent = searchText.innerText
    itemInfoContainer.append(card)
  })

  const cards = itemInfoContainer.querySelectorAll('.item-info-card')

  searchInput.addEventListener('input', (e) => {
    itemInfoContainer.classList.remove('hide')

    const value = e.target.value.toLowerCase()
    console.log(value)
    cards.forEach((card) => {
      const isVisible = card.innerText.toLowerCase().includes(value)
      card.classList.toggle('hide', !isVisible)
    })

    if (value === '') {
      itemInfoContainer.classList.add('hide')
    }
  })
}

export default searchBar
