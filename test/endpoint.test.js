const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../src/app').app

chai.use(chaiHttp)


describe('Suite de test de integracion para endpoints', () => {
    it('Should return Hello World!', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.assert.equal(res.text, 'Hello World!')
                done()
            })
    })
})