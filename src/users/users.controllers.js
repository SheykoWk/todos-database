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

}

const createUser = (body) => {

}

const editUser = (id, body) => {

}

const deleteUser = (id) => {

}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    editUser,
    deleteUser
}

