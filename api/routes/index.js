const bodyParser = require('body-parser')
const jogos = require('./jogosRoute')
const vendas = require('./vendasRoute')
const compras = require('./comprasRoute')
const receitas = require('./receitasRoute')

module.exports = route => {
    route.use(bodyParser.json(), jogos, vendas, compras, receitas)
}