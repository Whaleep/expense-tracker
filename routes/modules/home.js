const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const category = req.query.category
  const filter = {}
  if (category) { filter.category = category }

  Promise.all([
    Category.find().lean(),
    Record.find(filter).populate('category').lean()
  ])
    .then(values => {
      const [categories, records] = values
      let totalAmount = 0
      records.forEach(record => totalAmount += record.amount)
      res.render('index', { categories, category, records, totalAmount })
    })
    .catch(error => console.log(error))

})

module.exports = router
