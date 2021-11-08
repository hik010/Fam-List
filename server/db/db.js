const Sequelize = require('sequelize');
const config = {logging: false}
if(process.env.DATABASE_URL){
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  };
}
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/async-week-project', config)

module.exports = db;
