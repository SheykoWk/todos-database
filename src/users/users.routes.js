const router = require('express').Router();

router.route('/users')
    .get((req, res) => {
        res.json({
            message: "Hola"
        })
    })
    .post()

router.route('/users/:id')
    .get()
    .put()
    .delete()


exports.router = router



