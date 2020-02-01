let queries = Object.create(null)

queries = {
    GET_USER_BY_NAME: `SELECT * FROM USERS WHERE name = $1`,

    GET_USER_BY_ID: `SELECT * FROM USERS WHERE uid = $1`
}

module.exports = queries