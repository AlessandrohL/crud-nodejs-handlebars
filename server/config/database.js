const { Sequelize } = require('sequelize')
// require('dotenv').config()

const db = new Sequelize(
  'db_books_node',
  'root',
  'Marcotulio123',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

db.authenticate()
  .then(() => {
    console.log('Connection sucessfull!')
  })
  .catch(err => {
    console.log(err)
  })

module.exports = db
