const express = require('express');
const morgan = require('morgan');
const config = require('../config')
const userRoutes = require('./users/users.routes').router


const app = express()

app.use(morgan("dev"))

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

//? Aqui esta el endpoint para la version 1 de mi api
app.use('/api/v1', userRoutes)




app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

exports.app = app






