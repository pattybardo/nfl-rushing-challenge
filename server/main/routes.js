var express = require('express')
var router = express.Router()
var pool = require('./db')

router.get('/api/nfl-rushing', (request, response) => {
    response.json("Hello World")
})

// Get all info 
router.get('/api/get/nfl-rushing', (req, res, next) => {

    pool.query(`SELECT * FROM nfl_rushing`,
                [ post_id ], (q_err, q_res) => {
                    res.json(q_res.rows)
        })
} )

module.exports = router