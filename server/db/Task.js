const Sequelize = require('sequelize')
const db = require('./db');

const Task = db.define('task', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status : {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: new Date()
  }
})

module.exports = Task;
