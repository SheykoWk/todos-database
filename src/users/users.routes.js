const router = require('express').Router();
const usersServices = require('./users.http')
const passport = require('passport')

//! const auth = require('../tools/auth')
//! auth(passport)

require('../tools/auth')(passport)



router.route('/users')
    .get( usersServices.getUsers)
    .post(usersServices.postUser)

router.route('/users/:id')
    .get(passport.authenticate('jwt', {session: false}), usersServices.getUserById)
    .put(usersServices.putUser)
    .delete(usersServices.deleteUser)


exports.router = router



