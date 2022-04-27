import express from "express";
import FornecedorModel from "../../Fornecedor/models/FornModel.js";
import FornecedorController from "../../Fornecedor/controllers/FornControllers.js";

const fornecedorRouter = express.Router()

fornecedorRouter.post('/', async (req, res) => {
  try {
             const dados = req.body
              const fornecedorController = new FornecedorController(dados)
              await fornecedorController.adicionar(fornecedorController)
              res.status(200).json({fornecedorController}) 
     } 
      catch (e){
        res.status(400).json({erro: e.message})
      }
  }) 

fornecedorRouter.get('/', async (req, res) => {
  try {
    const fornecedor = await FornecedorController.listarUmItemPorId(req)
    res.status(200).json({fornecedor})
  }  catch (e) {
      res.status(400).json({erro: e.message})
    }
}) 

export default fornecedorRouter