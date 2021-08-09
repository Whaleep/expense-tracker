
document.querySelector('#data-panel').addEventListener('click', (event) => {
  // delete confirm modal
  if (event.target.classList.contains('btn-delete')) {
    document.querySelector('#delete-modal-body').innerHTML = `確定要刪除 ${event.target.dataset.info} 嗎？`
    document.querySelector('#delete-form').action = `/records/${event.target.dataset.id}?_method=DELETE`
  }
  // click catagory tragger filter
  if (event.target.tagName === 'I') {
    const categoryFilter = document.querySelector('#category-filter')
    categoryFilter.value = event.target.dataset.category
    categoryFilter.parentElement.submit()
  }
})

// query filter
const filterIds = ['#month-filter', '#category-filter']
filterIds.forEach(filterId => {
  const filter = document.querySelector(filterId)
  filter.value = filter.dataset.value
  filter.addEventListener('change', () => filter.parentElement.submit())
})
