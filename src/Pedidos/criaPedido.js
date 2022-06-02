import Sequelize, { Model } from 'sequelize'
import database from '../config/db.js'

class PedidoTable extends Model {}

PedidoTable.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },

       

        id_cliente: {
            type: Sequelize.INTEGER
        },

        id_item: {
            type: Sequelize.INTEGER
        },

        numero_mesa: {
            type: Sequelize.INTEGER
        },

        quantidade: {
            type: Sequelize.INTEGER
        },

        item: {
            type: Sequelize.ENUM('bebida', 'higiene', 'alimento', 'utilitario')
        },

        preco_total: {
            type: Sequelize.INTEGER
        },

    },

    {
        sequelize: database,
        modelName: 'Pedido',
        timestamps: false
    }
    )

    export default PedidoTable