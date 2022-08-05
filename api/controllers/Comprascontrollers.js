// const database = require('../models')
const { ComprasServices } = require('../services')
const compraServices = new ComprasServices()


class ComprasControllers {
    static async pegaTodasAsCompras(req, res) {
        try {
            const todasAsCompras = await compraServices.pegaTodosOsRegistros()
            return res.status(200).json(todasAsCompras)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restaurarCompra(req, res) {
        const { id } = req.params
        try {
            await compraServices.restauraRegistro(Number(id))
            return res.status(200).json({ mensagem: `id ${id} restaurado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmaCompra(req, res) {
        const { id } = req.params
        try {
            const umaCompra = await compraServices.pegaUmRegistro({ id })
            return res.status(200).json(umaCompra)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaCompra(req, res) {
        const novaCompra = req.body;
        try {
            const novaCompraCriada = await compraServices.criaRegistro(novaCompra)
            return res.status(200).json(novaCompraCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarCompra(req, res) {
        const attInfo = req.body
        const { id } = req.params
        try {
            await compraServices.atualizaRegistro(attInfo, Number(id))
            return res.status(200).json(compraServices)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deletarCompra(req, res) {
        const { id } = req.params
        try {
            await compraServices.apagaRegistro(Number(id))
            return res.status(200).json({ mensagem: `O jogo do id ${id} foi apagado com sucesso` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ComprasControllers