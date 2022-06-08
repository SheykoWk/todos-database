const router = require('express').Router();




router.route('/users')
    .get((req, res) => {
        res.status(200).json(usersDB)
    })
    .post()

router.route('/users/:id')
    .get()
    .put()
    .delete()


exports.router = router



