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
      type: Sequelize.CHAR,
    },

    email_cliente: {
      type: Sequelize.CHAR,
    },
  },

  {
    sequelize: database,
    modelName: "Cliente",
    timestamps: false,
  }
);

export default ClientesTable;
