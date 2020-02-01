const run = require('./queryExec/queryExecute')
const query = require('./queries/clients')

function Clients() {
    this.id,
        this.name,
        this.phone,
        this.street,
        this.buld,
        this.forntdoor,
        this.floor,
        this.room,
        this.city
}

Clients.prototype.getClients = function(callback) {
    /**
     * @todo Подключить redis (хранить клиентов в оперативной паяти)?
     */
    run.query(query.GET_CLIENTS, (result) => {
        callback(result.rows)
    })
}