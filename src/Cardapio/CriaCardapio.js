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

        nome: {
            type: Sequelize.CHAR
        },

        descricao: {
            type: Sequelize.CHAR
        },

        preco: {
            type: Sequelize.CHAR
        },

        img: {
            type: Sequelize.STRING
        },

    },

    {
        sequelize: database,
        modelName: 'Cardapio',
        timestamps: false
    }
)

export default CardapioTable