const express = require('express');
require('dotenv').config();
const sendMail = require('./routes/index');
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}));
app.use(express.json())

app.use("/test", (req, res) => {
    res.send("Working!!!")
})
app.use('/', sendMail);



const port = process.env.PORT || 5050;

app.listen(port, () =>
    console.log(`Server is listening on port ${port}...`)
);