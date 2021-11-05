let color_options = [
  'fireBrick',
  'tan',
  'skyblue',
  'violet',
  'salmon',
  'SeaGreen',
  'orange',
  'MediumSlateBlue',
  'PaleVioletRed',
  'CornflowerBlue',
];

const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue:
      color_options[Math.floor(Math.random() * color_options.length)],
  },
});

module.exports = User;
