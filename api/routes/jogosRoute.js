const {Router} = require('express')
const JogosController = require('../controllers/Jogoscontrollers')

const router = Router()

router
.get('/jogos', JogosController.pegaTodosOsJogos)
.get('/jogos/estoque', JogosController.pegaJogosEstoque)
.get('/jogos/:id', JogosController.pegaUmJogo)
.get('/jogos/:jogoId/vendas',JogosController.pegaVenda)
.post('/jogos', JogosController.criaJogo)
.post('/jogos/:id/restaura', JogosController.restaurarJogo)
.put('/jogos/:id', JogosController.atualizarJogo)
.delete('/jogos/:id', JogosController.deletarJogo)

module.exports = router