const express = require('express');
require('dotenv').config();
const cors = require('cors')
const app = express()
app.use(cors())
app.options('*', cors())
const sendMail = require('./routes/index');
app.use(express.json())
app.use('/', sendMail);

const port = process.env.PORT || 5050;

app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
);