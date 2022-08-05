// const database = require('../models')
const { Op } = require('sequelize')
const { JogosServices } = require('../services')
const jogosServices = new JogosServices()

class JogosController {
    static async pegaJogosEstoque(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}
        data_inicial || data_final ? where.data_lancamento = {} : null
        data_inicial ? where.data_lancamento[Op.gte] = data_inicial : null
        data_final ? where.data_lancamento[Op.lte] = data_final : null
        try {
            const JogosEstoque = await jogosServices.pegaTodosOsValores({ where })
            return res.status(200).json(JogosEstoque)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaTodosOsJogos(req, res) {
        try {
            const todosOsJogos = await jogosServices.pegaTodosOsRegistros()
            return res.status(200).json(todosOsJogos)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarJogo(req, res) {
        const { id } = req.params
        try {
            await jogosServices.restauraRegistro(Number(id))
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmJogo(req, res) {
        const { id } = req.params
        try {
            const umJogo = await jogosServices.pegaUmRegistro({ id })
            return res.status(200).json(umJogo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaJogo(req, res) {
        const novoJogo = req.body;
        try {
            const novoJogoCriado = await jogosServices.criaRegistro(novoJogo)
            return res.status(200).json(novoJogoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarJogo(req, res) {
        const attInfo = req.body
        const { id } = req.params
        try {
            await jogosServices.atualizaRegistro(attInfo, Number(id))
            return res.status(200).json(jogosServices)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deletarJogo(req, res) {
        const { id } = req.params
        try {
            await jogosServices.apagaRegistro(Number(id))
            return res.status(200).json({ mensagem: `O jogo do id ${id} foi apagado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaVenda(req, res) {
        const { jogoId } = req.params
        try {
            const jogo = await jogosServices.pegaUmRegistro({ id: Number(jogoId) })
            const venda = await jogo.getVendasDoJogo()
            return res.status(200).json(venda)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = JogosController