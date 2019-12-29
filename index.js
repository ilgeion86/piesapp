require('dotenv').config()
const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express()')
})
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log("Server is working", 'PORT=', process.env.PORT, " HOST=", process.env.HOST)
})