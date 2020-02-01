const db = require('../../configs/db-connect').initdb()

/**
 * Запуск запроса без параметров
 * @qyerStr - запрос
 * @callback - колбек функция в которую передается результат запроса
 */
module.exports.query = async function(queryStr, callback) {
    const client = await db.connect()
    const query = queryStr
    try {
        const data = await db.query(query)
        callback(data)
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
}

module.exports.queryWithParam = async function(queryStr, param, callback) {
    const client = await db.connect()
    const query = queryStr
    try {
        const data = await db.query(query, [param])
        callback(data)
    } catch (e) {
        console.log(e)
    } finally {
        client.release()
    }
}