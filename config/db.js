const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    username : process.env.USERNAME,
    password : process.env.PASSWORD,
    port: process.env.DBPORT,
    host: 'localhost',
    database : 'wazirxdb'
})

module.exports = pool
