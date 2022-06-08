/*
? Aqui estaran todas las funciones del siguiente tipo
? (req, res, next) => {

? }
*/ 

const usersControllers = require('./users.controllers')

const getUsers = (req, res) => {
    res.status(200).json(usersControllers.getAllUsers())
}

module.exports = {
    getUsers
}