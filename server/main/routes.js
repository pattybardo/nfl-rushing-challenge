var express = require('express')
var router = express.Router()
var pool = require('./db')

// Get all info 
router.get('/api/get/nfl-rushing', (req, res) => {

    pool.query(`SELECT * FROM nfl_rushing`,
        (q_err, q_res) => {
            res.json(q_res.rows)
        })
} )

module.exports = router