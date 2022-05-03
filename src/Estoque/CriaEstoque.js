import Sequelize, { Model } from 'sequelize'
import database from '../config/db.js'

class EstoqueTable extends Model {}

EstoqueTable.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },

        nome_produto: {
            type: Sequelize.CHAR
        },

        quantidade: {
            type: Sequelize.INTEGER
        },

        id_fornecedor: {
            type: Sequelize.INTEGER
        },

        tipo: {
            type: Sequelize.ENUM('bebida', 'higiene', 'alimento', 'utilitario')
        },

        validade: {
            type: Sequelize.DATE
        },

    },

    {
        sequelize: database,
        modelName: 'Estoques',
        timestamps: false
    }
    )

    export default EstoqueTable