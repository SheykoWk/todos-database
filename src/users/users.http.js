/*
? Aqui estaran todas las funciones del siguiente tipo
? (req, res, next) => {

? }
*/ 

const usersControllers = require('./users.controllers')

const getUsers = (req, res) => {
    res.status(200).json(usersControllers.getAllUsers())
}

const getUserById = (req, res) => {
    const id = Number(req.params.id)
    res.status(200).json(usersControllers.getUserById(id))
}

const postUser = (req, res) => {
    res.status(201).json(usersControllers.createUser(req.body))
}

const putUser = (req, res) => {
    const id = Number(req.params.id)
    const body = req.body
    res.status(200).json(usersControllers.editUser(id, body))
}

const deleteUser = (req, res) => {
    const id = Number(req.params.id)
    usersControllers.deleteUser(id)
    res.status(204).json()
}

module.exports = {
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser
}