import express from "express";
import EstoqueModel from "../../Estoque/models/EstoqueModel.js";
import EstoqueController from "../../Estoque/controllers/EstoqueController.js";

const estoqueRouter = express.Router()


estoqueRouter.use('/', async (req, res) => {
    const dados = req.body
    const estoque = new EstoqueModel(dados)
    await EstoqueController.adicionar(estoque)
    res.status(200).json({estoque})
})


estoqueRouter.use('/', (req, res) => {

})


export default estoqueRouter