const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearhHistory = gnbSearch.querySelector('.search-history')
const gnbSearhHistoryList = gnbSearhHistory.querySelector('ol')

const deleteAllButton = gnbSearhHistory.querySelector(
  '.search-history-header button'
)

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearhHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

function openGnbSearchHistory(e) {
  if (gnbSearhHistoryList.children.length === 0) {
    return
  }

  if (!gnbSearhHistory.classList.contains('is-active')) {
    gnbSearhHistory.classList.add('is-active')
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)

function deleteAllSearchHistoryItems() {
  gnbSearhHistoryList.innerHTML = ''
  gnbSearhHistory.classList.remove('is-active')
}

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)
