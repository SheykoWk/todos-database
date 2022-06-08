const router = require('express').Router();
const usersServices = require('./users.http')

router.route('/users')
    .get(usersServices.getUsers)
    .post(usersServices.postUser)

router.route('/users/:id')
    .get(usersServices.getUserById)
    .put(usersServices.putUser)
    .delete(usersServices.deleteUser)


exports.router = router



