import {Model, DataTypes} from 'sequelize'
import database from '../config/db.js'

class Estoque extends Model {}

Estoque.init(

    {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },

        nome_produto: {
            type: DataTypes.CHAR
        },

        quantidade: {
            type: DataTypes.INTEGER
        },

        id_fornecedor: {
            type: DataTypes.INTEGER
        },

        tipo: {
            type: DataTypes.ENUM('bebida', 'higiene', 'alimento', 'utilitario')
        ,
        
        validade: {
            type: DataTypes.DATE
        }
    },

    },

    {
        sequelize: database,
        modelName: 'estoque',
        timestamps: false
    }
);

export default Estoque