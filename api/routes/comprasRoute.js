const {Router} = require('express')
const ComprasControllers = require('../controllers/ComprasControllers')

const router = Router()

router.get('/compras', ComprasControllers.pegaTodasAsCompras)
router.get('/compras/:id', ComprasControllers.pegaUmaCompra)
router.post('/compras', ComprasControllers.criaCompra)
router.post('/compras/:id/restaura', ComprasControllers.restaurarCompra)
router.put('/compras/:id', ComprasControllers.atualizarCompra)
router.delete('/compras/:id', ComprasControllers.deletarCompra)

module.exports = router