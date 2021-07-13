
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')

const toDate = require('./tools/handlebarsHelpers')
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: { toDate }
}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express is lintening on http://localhost:3000')
})
