import Sequelize, { Model } from 'sequelize'
import database from '../config/db.js'

class FornecedorTable extends Model {}

FornecedorTable.init(
    {
        id_fornecedor: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
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

        telefone: {
            type: Sequelize.NUMBER
        },


        tipo: {
            type: Sequelize.ENUM('bebida', 'higiene', 'alimento', 'utilitario')
        },

        tipo_secundario: {
            type: Sequelize.ENUM('bebida', 'higiene', 'alimento', 'utilitario')
        },

        tempo_entrega: {
            type: Sequelize.STRING
        }

    },

    {
        sequelize: database,
        modelName: 'Fornecedor',
        timestamps: false
    }
    )

    export default FornecedorTable