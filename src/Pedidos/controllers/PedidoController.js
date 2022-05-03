import PedidoTable from "../CriaPedido.js";
import PedidoModel from "../models/PedidoModel.js";
import Sequelize from 'sequelize'


class PedidoController {
    constructor({ id ,id_cliente,id_item, numero_mesa,quantidade, item, preco_total}){
        this.id = id;
        this.id_cliente = id_cliente;
        this.id_item= id_item;
        this.numero_mesa = numero_mesa;
        this.quantidade = quantidade;
        this.item = item;
        this.preco_total = preco_total;
    }

    static listar (){
        return PedidoTable.findAll()
    }

    static listarUmItemPorId(req){
 
        return PedidoTable.findByPk(req.params.id)

    }

    adicionar(){
        const pedido = new PedidoModel(this)
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