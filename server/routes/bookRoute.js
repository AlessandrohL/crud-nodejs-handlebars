const express = require('express')
const router = express.Router()

const {
  getAllBooks, createBook, showCreateBookForm, showUpdateBookForm, updateBook, deleteBook
} = require('../controllers/BookController')

router.get('/', getAllBooks)

router.post('/', createBook)

router.get('/create', showCreateBookForm)

router.get('/update/:id', showUpdateBookForm)

router.post('/save/:id', updateBook)

router.delete('/:id', deleteBook)

module.exports = router
