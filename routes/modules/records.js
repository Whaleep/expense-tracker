const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

// create
router.get('/new', (req, res) => {
  Category.find().lean()
    .then(categories => res.render('new', { categories }))
})

router.post('/', (req, res) => {
  Record.create({ ...req.body, userId: req.user._id })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// edit
router.get('/:id/edit', (req, res) => {
  Promise.all([
    Category.find().lean(),
    Record.findOne({ _id: req.params.id, userId: req.user._id }).lean()
  ])
    .then(values => {
      const [categories, record] = values
      return res.render('edit', { categories, record })
    })
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const _id = req.params.id
  return Record.findOne({ _id, userId: req.user._id })
    .then(record => {
      Object.assign(record, req.body)
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// delete
router.delete('/:id', (req, res) => {
  return Record.findOne({ _id: req.params.id, userId: req.user._id })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
