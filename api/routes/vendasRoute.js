const {Router} = require('express')
const VendasControllers = require('../controllers/VendasControllers')

const router = Router()

router.get('/vendas', VendasControllers.pegaTodasasVendas)
router.get('/vendas/:id', VendasControllers.pegaumaVenda)
router.post('/vendas', VendasControllers.criaVenda)
router.post('/vendas/:id/restaura', VendasControllers.restaurarVenda)
router.put('/vendas/:id', VendasControllers.atualizarVenda)
router.delete('/vendas/:id', VendasControllers.deletarVenda)

module.exports = router