import Sequelize, {
    Model
} from 'sequelize'
import database from '../config/db.js'

class CardapioTable extends Model {}

CardapioTable.init({
        id_item: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },

        id_pedido: {
            type: Sequelize.INTEGER,
        },

        descricao: {
            type: Sequelize.CHAR
        },

        preco: {
            type: Sequelize.CHAR
        },
    },

    {
        sequelize: database,
        modelName: 'Cardapio',
        timestamps: false
    }
)

export default CardapioTable