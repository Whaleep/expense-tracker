
// category select
const category = document.querySelector('#category')
category.value = category.dataset.value

// validation
const form = document.querySelector('.needs-validation')
form.addEventListener('submit', function onFormSubmitted (event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')
}, false)
