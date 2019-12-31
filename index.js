require('dotenv').config()
const fs = require('fs')
const https = require('https')
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const passport = require('passport')
const passport_initialize = require('./configs/passport-local')
const homeRouter = require('./routes/home-router')
const certificates = {
    cert: fs.readFileSync('./certificates/cert.crt'),
    key: fs.readFileSync('./certificates/private.key')
}


passport_initialize(passport)
app.set()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(flash())

app.use('/', homeRouter)

const $app_https = https.createServer(certificates, app)
    .listen(process.env.PORT, process.env.HOST)

$app_https.on('listening', () => {
    console.log("Server is working", 'PORT=', process.env.PORT, " HOST=", process.env.HOST)
})