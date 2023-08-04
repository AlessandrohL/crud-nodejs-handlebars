/* eslint-disable camelcase */

const Author = require('../models/Author')

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll({ raw: true })
    console.log(authors)
    await res.render('authors', { authors })
  } catch (error) {
    res.status(500).render('error', { message: error.message })
  }
}

const showCreateAuthorForm = (req, res) => {
  res.render('createAuthor')
}

const createAuthor = async (req, res) => {
  const { name, nationality, date_birth } = await req.body

  try {
    await Author.create({ name, nationality, date_birth })
    res.redirect('/authors')
  } catch (error) {
    console.log(error.message)
  }
}

const getAuthorById = async (req, res) => {
  const { id } = req.params
  try {
    const author = await Author.findByPk(id)
    if (author) {
      res.json(author)
    } else {
      res.status(404).json({ message: 'Autor no encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el autor.' })
  }
}

const getBooksByAuthorId = async (req, res) => {
  const { id } = req.params
  try {
    const author = await Author.findByPk(id, {
      include: 'books'
    })

    if (author) {
      const books = author.books

      res.json(books)
    } else {
      res.status(404).json({ message: 'Autor no encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros del autor.' })
  }
}

const showUpdateAuthorForm = async (req, res) => {
  const { id } = req.params
  try {
    const author = await Author.findByPk(id)
    if (author) {
      const { author_id, name, nationality, date_birth } = author
      res.render('editAuthor', { author_id, name, nationality, date_birth })
    } else {
      res.status(404).render('error', { message: 'Autor no encontrado.' })
    }
  } catch (error) {
    res.status(500).render('error', { message: 'Error al obtener el autor.' })
  }
}

const updateAuthor = async (req, res) => {
  const { id } = req.params
  const { name, nationality, date_birth } = req.body

  try {
    const author = await Author.findByPk(id)
    if (author) {
      await author.update({ name, nationality, date_birth })
      res.redirect('/authors')
    } else {
      res.status(404).render('error', { message: 'Autor no encontrado.' })
    }
  } catch (error) {
    res.status(500).render('error', { message: 'Error al actualizar el autor.' })
  }
}

const deleteAuthor = async (req, res) => {
  const { id } = await req.params
  try {
    const author = await Author.findByPk(id)
    if (author) {
      await author.destroy()
      res.sendStatus(200)
    } else {
      res.status(404).render('error', { message: 'Autor no encontrado.' })
    }
  } catch (error) {
    res.status(500).render('error', { message: 'Error al eliminar el autor.' })
  }
}

module.exports = {
  getAllAuthors,
  showCreateAuthorForm,
  createAuthor,
  getAuthorById,
  getBooksByAuthorId,
  showUpdateAuthorForm,
  updateAuthor,
  deleteAuthor
}
