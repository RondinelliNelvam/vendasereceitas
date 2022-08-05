// const { VendasServices } = require('../services')
const { ReceitasServices } = require('../services')

// const vendasServices = new VendasServices()
const receitas = new ReceitasServices()
const database = require('../models')

class ReceitasControllers {

    static async pegaTodasAsReceitas(req, res) {
        try {
            const todasAsReceitas = await receitas.pegaTodosOsRegistros()
            return res.status(200).json(todasAsReceitas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaValoresVendas(req, res) {
        const { id } = req.params

        let sum = 0;
        try {
            const receitaEscolhida = await database.Receitas.findByPk(id)
            const jogo_id_venda = receitaEscolhida.jogo_id_receita
            console.log(jogo_id_venda)
            const vendasDoJogo = await database.Vendas.findAll({ where: { jogo_id_venda } })
            const valorDoJogo = await database.Jogos.findByPk(jogo_id_venda)
            const valor = valorDoJogo.valor_venda;
            vendasDoJogo.forEach(vendasDoJogo => {
                sum += Number(vendasDoJogo.quantidade_vendas)
            });
            const valortotal = valor * sum
            await database.Receitas.update({ saldo_positivo: valortotal }, { where: { jogo_id_receita: Number(jogo_id_venda) } })
            return res.status(200).json(`O valor da receita do jogo com id ${jogo_id_venda} foi atualizado para o valor R$${valortotal}`)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaValoresCompras(req, res) {
        const { id } = req.params

        let sum = 0;
        try {
            const receitaEscolhida = await database.Receitas.findByPk(id)
            const jogo_id_compra = receitaEscolhida.jogo_id_receita
            console.log(jogo_id_compra)
            const comprasDoJogo = await database.Compras.findAll({ where: { jogo_id_compra } })
            const valorDoJogo = await database.Jogos.findByPk(jogo_id_compra)
            const valor = valorDoJogo.valor_compra;
            console.log(valor)
            comprasDoJogo.forEach(comprasDoJogo => {
                sum += Number(comprasDoJogo.quantidade_compra)
            });
            const valortotal = valor * sum
            await database.Receitas.update({ saldo_negativo: valortotal }, { where: { jogo_id_receita: Number(jogo_id_compra) } })
            return res.status(200).json(`O saldo negativo do jogo com id ${jogo_id_compra} foi atualizado para o valor R$${valortotal}`)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizaSaldoTotal(req, res) {
        const { id } = req.params

        try {

            const saldoPositivo = await receitas.atualizaValores(Number(id))
            await database.Receitas.update({ saldo_positivo: valortotal }, { where: { jogo_id_receita: Number(jogo_id_venda) } })

            const saldoNegativo = await receitas.atualizaValores(Number(id))
            await database.Receitas.update({ saldo_negativo: valortotal }, { where: { jogo_id_receita: Number(jogo_id_compra) } })

            const receitaEscolhida = await database.Receitas.findByPk(id)
            const saldo_negativo = receitaEscolhida.saldo_negativo
            const saldo_positivo = receitaEscolhida.saldo_positivo
            const valortotal = Number(saldo_positivo) - Number(saldo_negativo)
            console.log(valortotal)


            await database.Receitas.update({ saldo_total: valortotal }, { where: { id: Number(id) } })
            return res.status(200).json(`O saldo final do valor é de ${valortotal}`)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ReceitasControllers

//, { include: [{ model: database.Vendas, as: 'vendasDoJogo' }] })
// .scope('todos').findAll({where: {...where}})

        // const { id } = req.params
        // const { jogo_id_venda } = req.params

        // let sum = 0;
        // try {
        //     // const receitaEscolhida = await database.Receitas.findOne({ where: { id } })
        //     const vendasDoJogo = await database.Vendas.findAll({ where: { jogo_id_venda } })
        //     const valorDoJogo = await database.Jogos.findByPk(jogo_id_venda)
        //     const valor = valorDoJogo.valor_venda;
        //     vendasDoJogo.forEach(vendasDoJogo => {
        //         sum += Number(vendasDoJogo.quantidade_vendas)
        //     });
        //     const valortotal = valor * sum
        //     await database.Receitas.update({ saldo_positivo: valortotal }, { where: { jogo_id_receita: Number(jogo_id_venda) } })
        //     return res.status(200).json(`O valor da receita do jogo com id ${jogo_id_venda} foi atualizado para o valor R$${valortotal}`)
