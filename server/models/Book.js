const { Sequelize } = require('sequelize')
const db = require('../config/database')

const Book = db.define('book', {
  book_id: {
    type: Sequelize.INTEGER(),
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING(200),
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING(50)
  },
  date_publication: {
    type: Sequelize.DATE()
  }
}, {
  modelName: 'Book',
  tableName: 'book',
  timestamps: false
})

module.exports = Book
