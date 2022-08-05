const Services = require('./Services')
const database = require('../models')
// const { VendasServices } = require('./VendasServices')
// const vendasServices = new VendasServices()

class ReceitasServices extends Services {
    constructor() {
        super('Receitas')
    }

    static async atualizaValores(where = {}) {
        let sum = 0;
        try {
            const receitaEscolhida = await database[this.nomeDoModelo].findByPk({ where })
            const jogo_id_venda = receitaEscolhida.jogo_id_receita
            console.log(jogo_id_venda)
            const vendasDoJogo = await database.Vendas.findAll({ where: { jogo_id_venda } })
            const valorDoJogo = await database.Jogos.findByPk(jogo_id_venda)
            const valor = valorDoJogo.valor_venda;
            vendasDoJogo.forEach(vendasDoJogo => {
                sum += Number(vendasDoJogo.quantidade_vendas)
            });
            const valortotal = valor * sum
            return [valortotal, sum]

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}


module.exports = ReceitasServices