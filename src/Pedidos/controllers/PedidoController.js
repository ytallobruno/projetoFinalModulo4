import PedidoTable from "../CriaPedido.js";
import PedidoModel from "../models/PedidoModel.js";
import Sequelize from 'sequelize'


class PedidoController {

    static listar (){
        return PedidoTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return PedidoTable.findByPk(req.params.id)

    }

    static adicionar(pedido){
        return PedidoTable.create(pedido)
    }

    static deletar (idDeletado){
       PedidoTable.destroy(
            {
                where: {
                    id: idDeletado
                }
            }
        )
    }

    static update (req) {
        PedidoTable.update(
            req.body
        ,
        {
            where: {
                id: req.params.id
            }
        }
        )
    }
}


    
   
   


export default PedidoController