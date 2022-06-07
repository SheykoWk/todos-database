const express = require('express');
const config = require('../config')

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})


app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

exports.app = app






