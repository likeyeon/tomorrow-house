const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearhHistory = gnbSearch.querySelector('.search-history')
const gnbSearhHistoryList = gnbSearhHistory.querySelector('ol')

const deleteAllButton = gnbSearhHistory.querySelector(
  '.search-history-header button'
)
const deleteButtonList = gnbSearhHistoryList.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearhHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory(e) {
  if (gnbSearhHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearhHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
  gnbSearhHistory.classList.add('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems() {
  gnbSearhHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

function deleteSearchHistoryItem(e) {
  e.stopPropagation()
  const itemToDelete = this.parentNode
  gnbSearhHistoryList.removeChild(itemToDelete)

  if (gnbSearhHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
