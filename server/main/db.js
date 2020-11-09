const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'the_score',
  password: '',
  post: 5432
})

module.exports = pool