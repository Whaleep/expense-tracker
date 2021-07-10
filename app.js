
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(routes)

app.listen(3000, () => {
  console.log('Express is lintening on http://localhost:3000')
})
