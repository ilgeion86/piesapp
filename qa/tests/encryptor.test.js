const crypto = require('../../encrypt/encryptor')
const assert = require('assert')

it('Checking hash and compare hash passwords', () => {
    const password = Math.round((new Date().valueOf() * Math.random())) + ''
    const expected = crypto.createHash(password)
    const result = crypto.hashForCompare(expected.salt, password)

    assert.equal(result, expected.hash, 'Hashes doesn\'t match')
})