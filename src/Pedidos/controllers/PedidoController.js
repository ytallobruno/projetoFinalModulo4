import PedidoTable from "../criaPedido.js";

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