const express = require('express')
const router = express.Router()

const { sendMail } = require('../controllers/index')

router.post('/:email', sendMail)

module.exports = router