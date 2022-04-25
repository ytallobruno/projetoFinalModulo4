import Sequelize from 'sequelize'

const database = new Sequelize("database", "grupo1t14", "grupo1t14", {
    dialect: "sqlite",
    host: "./db.sqlite",
  });
  
export default database