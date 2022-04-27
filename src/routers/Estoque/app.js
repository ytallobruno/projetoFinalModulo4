import express from "express";
import EstoqueController from "../../Estoque/controllers/EstoqueController.js";
import Validador from "../../utils/Estoque/Validador.js";

const estoqueRouter = express.Router()



/* estoqueRouter.post('/', async (req, res) => {
  try {
    if (Validador.checaFormato(req.body.validade))
    {
      try {
        if (Validador.checaValidade(req.body.validade)){
              const dados = req.body
              const estoqueController = new EstoqueController(dados)
              await estoqueController.adicionar(estoqueController)
              res.status(200).json({estoqueController}) } 
        else {
          throw new Error ("O produto não pode ser inserido pois faltam 10 ou menos dias para o seu vencimento.")  } 
        } 
      catch (e){
        res.status(400).json({erro: e.message})
      }

      }
        else {
      throw new Error ('Data no formato inválido: Utilize o formato YYYY-MM-DD')
    }   

    } catch (e){
      res.status(400).json({erro: e.message})
    }

  }) */



/* estoqueRouter.get('/:id', async (req, res) => {
  try {
    const estoque = await EstoqueController.listarUmItemPorId(req)
    if(estoque != null){
    res.status(200).json({estoque})
  } else{
    throw new Error ('O produto não existe no estoque. Filtre por um ID válido')
  }
    } catch (e) {
      res.status(400).json({erro: e.message})
    }
}) */


/* estoqueRouter.get('/', async (req, res) => {
  try {
      const estoque = await EstoqueController.listar()
      console.log(req.params)
      res.status(200).json({estoque})
      } catch (error) {
       res.status(400).json({erro: e.message})
      }
  }) */


/* estoqueRouter.delete('/:id', async (req, res) => {
  try {
     const deletado = await EstoqueController.deletar(req.params.id)
     const estoque = await EstoqueController.listar()
     res.status(200).json({estoque})

  } catch (e) {
    res.status(400).json({erro: e.message})
  }
}) */

estoqueRouter.patch('/:id', async (req, res) => {
  try {
    const modificado = await EstoqueController.update(req)
    const estoque = await EstoqueController.listar()
    res.status(200).json({estoque})

  } catch (e) {
    res.status(400).json({erro: e.message})
  }
})

export default estoqueRouter