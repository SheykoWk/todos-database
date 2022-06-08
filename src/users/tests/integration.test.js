const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app

chai.use(chaiHttp)

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

describe('Integration Testing For Users', () => {
    it('Should return all the users', (done) => {
        chai.request(app)
            .get('/api/v1/users')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                chai.assert.equal(res.body[0].first_name, "Sahid")
                chai.assert.equal(res.body.length, usersDB.length)
                done()
            })
    })
})




