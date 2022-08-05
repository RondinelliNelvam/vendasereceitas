// const database = require('../models')
const { Op } = require('sequelize')
const { VendasServices } = require('../services')
const vendasServices = new VendasServices()

class VendasController {
    static async pegaTodasasVendas(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}
        data_inicial || data_final ? where.data_venda = {} : null
        data_inicial ? where.data_venda[Op.gte] = data_inicial : null
        data_final ? where.data_venda[Op.lte] = data_final : null
        try {
            const todasAsVendas = await vendasServices.pegaTodosOsValores({ where })
            return res.status(200).json(todasAsVendas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarVenda(req, res) {
        const { id } = req.params
        try {
            await vendasServices.restauraRegistro(Number(id))
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaumaVenda(req, res) {
        const { id } = req.params
        try {
            const umaVenda = await vendasServices.pegaUmRegistro({ id })
            return res.status(200).json(umaVenda)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVenda(req, res) {
        const novaVenda = req.body;
        try {
            const novaVendaCriada = await vendasServices.criaRegistro(novaVenda)
            return res.status(200).json(novaVendaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarVenda(req, res) {
        const attInfo = req.body
        const { id } = req.params
        try {
            await vendasServices.atualizaRegistro(attInfo, Number(id))
            return res.status(200).json(vendasServices)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deletarVenda(req, res) {
        const { id } = req.params
        try {
            await vendasServices.apagaRegistro(Number(id))
            return res.status(200).json({ mensagem: `A venda da id ${id} foi apagada com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


}

module.exports = VendasController