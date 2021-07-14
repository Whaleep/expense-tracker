
// delete confirm modal
document.querySelector('#data-panel').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    document.querySelector('#delete-modal-body').innerHTML = `確定要刪除 ${event.target.dataset.info} 嗎？`
    document.querySelector('#delete-form').action = `/records/${event.target.dataset.id}?_method=DELETE`
  }
})

// category query filter 
const categoryFilter = document.querySelector('#category-filter')
categoryFilter.value = categoryFilter.dataset.value
categoryFilter.addEventListener('change', () => categoryFilter.parentElement.submit())
