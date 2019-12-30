const crypto = require('../../encrypt/encryptor')
const assert = require('assert')

it('Checking hash and compare hash passwords', () => {
    const password = '1234567'
    const expected = crypto.createHash(password)
    const result = crypto.compareHash(
        expected.salt,
        expected.hash,
        password
    )

    assert.equal(result, expected.hash, 'Hashes doesn\'t match')
})