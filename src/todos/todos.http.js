const {getUserIdByEmail} = require('../users/users.controllers')
const todosControllers = require('./todos.controllers')

const getTodos = (req, res) => {
    const email = req.user.email;
    const id = getUserIdByEmail(email);
    console.log('My id' ,id);
    res.status(200).json(todosControllers.getAllTodos(id))

}

module.exports = {
    getTodos
}