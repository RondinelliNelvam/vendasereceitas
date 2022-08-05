const database = require('../models')
const Services = require('./Services')


class JogosServices extends Services {
    constructor() {
        super('Jogos')
    }
    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where })
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].scope('todos').findAll({ where })
    }

}


module.exports = JogosServices