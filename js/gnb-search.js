const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearhHistory = gnbSearch.querySelector('.search-history')

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearhHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

function openGnbSearchHistory(e) {
  if (!gnbSearhHistory.classList.contains('is-active')) {
    gnbSearhHistory.classList.add('is-active')
    window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
