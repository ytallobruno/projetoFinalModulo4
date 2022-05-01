import Sequelize, { Model } from "sequelize";
import database from "../config/db.js";

class ClientesTable extends Model {}

ClientesTable.init(
  {
    id_comanda: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },

    id_pedido: {
      type: Sequelize.INTEGER,
    },
    
    nome_cliente: {
      type: Sequelize.TEXT,
    },
    
    email_cliente: {
      type: Sequelize.TEXT,
    },
  },

  {
    sequelize: database,
    modelName: "Cliente",
    timestamps: false,
  }
);

export default ClientesTable;
