import Sequelize, { Model } from "sequelize";
import database from "../config/db.js";

class ClientesTable extends Model {}

ClientesTable.init(
  {
    id_cliente: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },

      nome_cliente: {
      type: Sequelize.TEXT,
    },
    
    email_cliente: {
      type: Sequelize.TEXT,
    },

    senha: {
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
