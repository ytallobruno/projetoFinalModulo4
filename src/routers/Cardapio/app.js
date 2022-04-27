import express from "express";
import CardapioModel from "../../Cardapio/models/CardapioModel.js";
import CardapioController from "../../Cardapio/controllers/CardapioController.js";

const cardapioRouter = express.Router()


cardapioRouter.use('/', async (req, res) => {
    const dados = req.body
    const cardapio = new CardapioModel(dados)
    await CardapioController.adicionar(cardapio)
    res.status(200).json({cardapio})
})


cardapioRouter.use('/', (req, res) => {

})


export default cardapioRouter