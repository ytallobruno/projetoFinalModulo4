import express from "express";
import EstoqueModel from "../../Estoque/models/EstoqueModel.js";
import EstoqueController from "../../Estoque/controllers/EstoqueController.js";

const estoqueRouter = express.Router()



// estoqueRouter.use('/', async (req, res) => {
  //   const dados = req.body
    // const estoqueController = new EstoqueController(dados)
    // await estoqueController.adicionar(estoqueController)
    // res.status(200).json({estoqueController})
// })


estoqueRouter.use('/', async (req, res) => {
    try {
    const estoque = await EstoqueController.listar()
    res.status(200).json({estoque})
    } catch (error) {
     console.log(e)
     res.status(404).send(e)
    }
})


export default estoqueRouter