require('dotenv').config()
const fs = require('fs')
const https = require('https')
const express = require('express')
const app = express();
const express_session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const passport = require('./configs/passport')

const homeRouter = require('./routes/homeRouter')
const productsRouter = require('./routes/productsRouter')
const certificates = {
    cert: fs.readFileSync('./certificates/cert.crt'),
    key: fs.readFileSync('./certificates/private.key')
}
const override = require('method-override')
const auth = require('./secondaryFunctions/checkAuthenticate')


app.set('view engine', 'pug')
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express_session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: process.env.EXPRESS_SESSION_RESAVE,
    saveUninitialized: process.env.EXPRESS_SESSION_SAVE_UNITIALIZED
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(override('_method'))

/**
 * ROUTES
 */
app.use('/', homeRouter)
app.use('/products', productsRouter)

/**
 * CREATE SERVER
 */
const $app_https = https.createServer(certificates, app)
    .listen(process.env.PORT, process.env.HOST) //'92.253.133.22'

$app_https.on('listening', () => {
    console.log("Server is working", 'PORT=', process.env.PORT, " HOST=", process.env.HOST)
})