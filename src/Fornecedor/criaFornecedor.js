import Sequelize, { Model } from 'sequelize'
import database from '../config/db.js'

class FornecedorTable extends Model {}

FornecedorTable.init(
    {
        id_fornecedor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },

        razao_social: {
            type: Sequelize.CHAR
        },

        nome_fantasia: {
            type: Sequelize.CHAR
        },

        endereco: {
            type: Sequelize.CHAR
        },

        tipo: {
            type: Sequelize.ENUM('bebida', 'higiene', 'alimento', 'utilitario')
        },

        id_item: {
            type: Sequelize.INTEGER
        },

        tempo_entrega: {
            type: Sequelize.INTEGER
        }

    },

    {
        sequelize: database,
        modelName: 'Fornecedor',
        timestamps: false
    }
    )

    export default FornecedorTable