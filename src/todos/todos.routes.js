const router = require('express').Router();
const passport = require('passport')
const todosServices = require('./todos.http')
require('../tools/auth')(passport)

router.route('/todos')
    .get(passport.authenticate('jwt', {session: false}), todosServices.getTodos)

exports.router = router
