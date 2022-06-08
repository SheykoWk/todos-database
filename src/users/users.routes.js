const router = require('express').Router();

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



