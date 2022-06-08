/*
! Aqui almacenaremos todas las funciones 
! que manejen logica relacionada a 
! las bases de datos
*/

const usersDB = [
    {
        id: 1,
        first_name: "Sahid",
        last_name: "Kick",
        email: "sahid.kick@academlo.com",
        password: "1234",
        active: true
    },
    {
        id: 2,
        first_name: "Juan",
        last_name: "Alvarez",
        email: "juanito@gmail.com",
        password: "4321",
        active: false
    }
]

const getAllUsers = () => {
    return usersDB
}

const getUserById = (id) => {
    const filteredDB = usersDB.filter((item) => item.id === id)
    return filteredDB[0]
}

const createUser = (body) => {
    const newUser = {
        id: usersDB[usersDB.length - 1].id + 1,
        ...body 
    }
    usersDB.push(newUser)
    return body
}

const editUser = (id, body) => {
    const index = usersDB.findIndex((item) => item.id === id)
    const editUser = {
        id,
        ...body
    }
    usersDB[index] = editUser

    return editUser
}


const deleteUser = (id) => {
    const index = usersDB.findIndex((item) => item.id === id)
    usersDB.splice(index, 1)
    return usersDB
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}

