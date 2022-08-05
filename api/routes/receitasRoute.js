const { Router } = require('express')
const ReceitasControllers = require('../controllers/Receitascontrollers')

const router = Router()

router.get('/receitas', ReceitasControllers.pegaTodasAsReceitas)
router.get('/receitas/:id/vendas', ReceitasControllers.atualizaValoresVendas)
router.get('/receitas/:id/compras', ReceitasControllers.atualizaValoresCompras)
router.get('/receitas/:id/atualiza', ReceitasControllers.atualizaSaldoTotal)


module.exports = router