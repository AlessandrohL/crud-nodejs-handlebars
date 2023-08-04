const { DataTypes, Sequelize } = require('sequelize')
const db = require('../config/database')
const Book = require('./Book')

const Author = db.define('author', {
  author_id: {
    type: Sequelize.INTEGER(),
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  nationality: {
    type: Sequelize.STRING(50)
  },
  date_birth: {
    type: Sequelize.DATE()
  }
}, {
  tableName: 'author',
  timestamps: false
})

Author.hasMany(Book, {
  as: 'books',
  foreignKey: 'author_id'
})
module.exports = Author
