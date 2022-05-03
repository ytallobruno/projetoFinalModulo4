
 /* import cardapioTable from ".../models/PedidoModel.js";
 import Sequelize from 'sequelize' */

class ValidadorPedido {
    
   /*  static checaproduto(item){
     let pedido = []
     item = req.body.item 
     const cardapio = cardapioTable.findAll()
     cardapio.forEach(element => {
         item == element.descricao ? pedido.push(item):false
    });
 
    pedido.length >= 1 ? true : false

    }  */ 
 
 static checaQuantidade(quantidade)  {
   
   quantidade >= 1 ?  true : false 

 }


} 

export default ValidadorPedido 


