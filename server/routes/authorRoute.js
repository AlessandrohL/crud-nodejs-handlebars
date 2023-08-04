const express = require('express')
const router = express.Router()
const {
  showCreateAuthorForm,
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  showUpdateAuthorForm,
  getBooksByAuthorId
} = require('../controllers/authorController')

router.get('/', getAllAuthors)

router.post('/', createAuthor)

router.get('/create', showCreateAuthorForm)

router.get('/:id', getAuthorById)

router.get('/books/:id', getBooksByAuthorId)

router.get('/update/:id', showUpdateAuthorForm)

router.post('/save/:id', updateAuthor)

router.delete('/:id', deleteAuthor)

module.exports = router
