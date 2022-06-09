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

app.post('/login', (req, res) => {
	// Aqui comprobamos las credenciales del usuario y retornamos el token en caso de ser exitoso
	res.status(201).json({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBhc3N3b3JkIjoicm9vdDEyMyJ9.NvfPbDJmhnBdlFi1cEuQPkLhDnvCqjANuQ-QGGvCBr4'})
})

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

exports.app = app






