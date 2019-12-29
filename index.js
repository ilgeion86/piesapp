require('dotenv').config()
const express = require('express')
const app = express();
const homeRouter = require('./routes/home-router')

app.use('/', homeRouter)

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server is working", 'PORT=', process.env.PORT, " HOST=", process.env.HOST)
})