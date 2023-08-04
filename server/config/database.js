const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
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
