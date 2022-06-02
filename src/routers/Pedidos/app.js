import express from "express";
import PedidoController from  "../../Pedidos/controllers/PedidoController.js";
import ValidadorPedido from  "../../utils/ValidadorPedido.js";
import PedidoModel from "../../Pedidos/models/PedidoModel.js";

 


const pedidoRouter = express.Router()



 pedidoRouter.post('/', async (req, res) => {
     try  { 
       if(ValidadorPedido.checaQuantidade(req.body.quantidade)){
          const dados = req.body
          const pedido = new PedidoModel(dados)
          await PedidoController.adicionar(pedido)
          res.status(200).json({pedido})
       }
       else{
         throw new Error("Quantidade deve ser maior que 1")
       }
     } catch (error) {
       res.status(400).json({error})
     }
  })



  pedidoRouter.get('/:id', async (req, res) => {
  try {
    const pedido = await PedidoController.listarUmItemPorId(req)
    if(pedido != null){
    res.status(200).json({pedido})
  } else{
    throw new Error ('O produto não existe no estoque. Filtre por um ID válido')
  }
    } catch (e) {
      res.status(400).json({erro: e.message})
    }
}) 


pedidoRouter.get('/', async (req, res) => {
  try {
      const pedido = await PedidoController.listar()
      console.log(req.params)
      res.status(200).json({pedido})
      } catch (e) {
       res.status(400).json({erro: e.message})
      }
  }) 


 pedidoRouter.delete('/:id', async (req, res) => {
  try {
     const deletado = await PedidoController.deletar(req.params.id)
     const pedido = await PedidoController.listar()
     res.status(200).json({pedido})
  } catch (e) {
    res.status(400).json({erro: e.message})
  }
}) 

pedidoRouter.patch('/:id', async (req, res) => {
  try {
    const modificado = await PedidoController.update(req)
    const pedido = await PedidoController.listar()
    res.status(200).json({pedido})

  } catch (e) {
    res.status(400).json({erro: e.message})
  }
})
 
export default pedidoRouter


