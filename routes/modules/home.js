const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {
  const TIMEZONE_OFFSET = (new Date()).getTimezoneOffset() * 60 * 1000

  // filter
  const { month, category } = req.query
  const filter = { userId: req.user._id }
  if (category) { filter.category = category }
  if (month) {
    const i = month.match(/(\d{4})-(\d{2})/)
    filter.date = { $gte: new Date(i[1], i[2] - 1), $lt: new Date(i[1], i[2]) }
  }

  Promise.all([
    Category.find().lean(),
    Record.find(filter).sort({ date: -1 }).populate('category').lean(),
    Record.aggregate([
      { $match: { userId: req.user._id } },
      {
        $project: {
          month: { $substr: [{ $subtract: ['$date', TIMEZONE_OFFSET] }, 0, 7] }
        }
      },
      { $group: { _id: '$month' } },
      { $sort: { _id: -1 } }
    ])
  ])
    .then(values => {
      const [categories, records, months] = values
      let totalAmount = 0
      records.forEach(record => totalAmount += record.amount)
      res.render('index', { categories, months, month, category, records, totalAmount })
    })
    .catch(error => console.log(error))
})

module.exports = router
