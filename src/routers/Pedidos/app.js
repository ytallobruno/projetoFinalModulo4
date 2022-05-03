import express from "express";
import PedidoController from  "../../Pedidos/controllers/PedidoController.js";
import ValidadorPedido from  "../../utils/ValidadorPedido.js";

 


const pedidoRouter = express.Router()



 pedidoRouter.post('/pedido', async (req, res) => {
     try  { 
       if(ValidadorPedido.checaQuantidade(req.body.quantidade)){
          const dados = req.body
          const pedidoController = new PedidoController(dados)
          console.log(pedidoController)
          await pedidoController.adicionar(pedidoController)
          res.status(200).json({pedidoController})
          res.send(req.body)
       }
       else{
         throw new Error("Quantidade deve ser maior que 1")
       }
     } catch (error) {
       res.status(400).json({error})
     }
  })



  pedidoRouter.get('/pedido/:id', async (req, res) => {
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


pedidoRouter.get('/pedido', async (req, res) => {
  try {
      const pedido = await PedidoController.listar()
      console.log(req.params)
      res.status(200).json({pedido})
      } catch (e) {
       res.status(400).json({erro: e.message})
      }
  }) 


 pedidoRouter.delete('/pedido/:id', async (req, res) => {
  try {
     const deletado = await PedidoController.deletar(req.params.id)
     const pedido = await PedidoController.listar()
     res.status(200).json({pedido})
  } catch (e) {
    res.status(400).json({erro: e.message})
  }
}) 

pedidoRouter.patch('/pedido/:id', async (req, res) => {
  try {
    const modificado = await PedidoController.update(req)
    const pedido = await PedidoController.listar()
    res.status(200).json({pedido})

  } catch (e) {
    res.status(400).json({erro: e.message})
  }
})
 
export default pedidoRouter


