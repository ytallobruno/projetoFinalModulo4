import express from "express";
import ClientesModel from "../../Clientes/models/ClientesModel.js";
import ClientesController from "../../Clientes/controllers/ClientesController.js";

const clientesRouter = express.Router()


clientesRouter.use('/', async (req, res) => {
    const dados = req.body
    const cliente = new ClientesModel(dados)
    await ClientesController.adicionar(cliente)
    res.status(200).json({cliente})
})


clientesRouter.use('/', (req, res) => {

})


export default clientesRouter