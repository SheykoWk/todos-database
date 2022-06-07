const { assert } = require("chai");

const myFunc = (a , b) => a + b

describe('Suite de pruebas unitarias de usuarios', () => {
    it('myFunc should return 4',  (done) => {
        const callFunc = myFunc(2, 2);
        assert.equal(callFunc, 4)
        done()
    })
    it('myFunc should return 5', (done) => {
        const callFunc = myFunc(2, 3);
        assert.equal(callFunc, 5)
        done()
    })
})
describe('Suite de pruebas de integracion de usuarios', () => {
    it('Integration test 1', (done) => {
        const callFunc = myFunc(2, 2);
        assert.equal(callFunc, 4)
        done()
    })
})