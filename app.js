const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const database = require('./server/config/database')

// routes
const authorRoutes = require('./server/routes/authorRoute')
const booksRoutes = require('./server/routes/bookRoute')

require('dotenv').config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static('public'))

app.engine('hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  const currentDate = new Date().toLocaleString()
  res.render('home', { currentDate })
})

app.use('/authors', authorRoutes)
app.use('/books', booksRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
