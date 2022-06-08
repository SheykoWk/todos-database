const router = require('express').Router();
const usersServices = require('./users.http')

router.route('/users')
    .get(usersServices.getUsers)
    .post(() => {
        
    })

router.route('/users/:id')
    .get()
    .put()
    .delete()


exports.router = router



