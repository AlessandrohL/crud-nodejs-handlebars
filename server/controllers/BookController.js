/* eslint-disable camelcase */
const Book = require('../models/Book')
const Author = require('../models/Author')

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ raw: true })
    await res.render('books', { books })
    console.log(books)
  } catch (error) {
    res.status(500).render('error', { message: error.message })
  }
}

const showCreateBookForm = async (req, res) => {
  try {
    const authors = await Author.findAll({ raw: true })
    res.render('createBook', { authors })
  } catch (error) {
    res.status(500).render('error', { message: error.message })
  }
}

const createBook = async (req, res) => {
  const { title, genre, date_publication, author_id } = await req.body

  try {
    await Book.create({ title, genre, date_publication, author_id })
    res.redirect('/books')
  } catch (error) {
    console.log(error.message)
  }
}

const showUpdateBookForm = async (req, res) => {
  const { id } = req.params
  try {
    const authors = await Author.findAll({ raw: true })
    const book = await Book.findByPk(id)
    if (book) {
      const { book_id, title, genre, date_publication, author_id } = book
      res.render('editBook', { book_id, title, genre, date_publication, author_id, authors })
    } else {
      res.status(404).render('error', { message: 'Autor no encontrado.' })
    }
  } catch (error) {
    res.status(500).render('error', { message: 'Error al obtener el autor.' })
  }
}

const updateBook = async (req, res) => {
  const { id } = req.params
  const { title, genre, date_publication, author_id } = req.body

  try {
    const book = await Book.findByPk(id)
    if (book) {
      await book.update({ title, genre, date_publication, author_id })
      res.redirect('/books')
    } else {
      res.status(404).render('error', { message: 'Libro no encontrado.' })
    }
  } catch (error) {
    res.status(500).render('error', { message: 'Error al actualizar el Libro.' })
  }
}

const deleteBook = async (req, res) => {
  const { id } = await req.params

  try {
    const book = await Book.findByPk(id)
    if (book) {
      await book.destroy()
      res.sendStatus(200)
    } else {
      res.status(404).render('error', { message: 'Libro no encontrado.' })
    }
  } catch (error) {
    res.status(500).render('error', { message: 'Error al eliminar el libro.' })
  }
}

module.exports = {
  getAllBooks,
  showCreateBookForm,
  showUpdateBookForm,
  updateBook,
  deleteBook,
  createBook
}
