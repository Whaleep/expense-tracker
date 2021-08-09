
// delete confirm modal
document.querySelector('#data-panel').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    document.querySelector('#delete-modal-body').innerHTML = `確定要刪除 ${event.target.dataset.info} 嗎？`
    document.querySelector('#delete-form').action = `/records/${event.target.dataset.id}?_method=DELETE`
  }
})

// query filter
const filterIds = ['#month-filter', '#category-filter']
filterIds.forEach(filterId => {
  const filter = document.querySelector(filterId)
  filter.value = filter.dataset.value
  filter.addEventListener('change', () => filter.parentElement.submit())
})
