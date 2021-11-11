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
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT || "imTheBest";

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

User.prototype.generateToken = function() {
  let token = jwt.sign({id: this.id}, SECRET);
  return token;

}

User.authenticate = async (credentials)=> {
    const user = await User.findOne({
      where: {
        name: credentials.name,
        password: credentials.password,
      },
    });
    if (user) {
      return user.generateToken();
    } else {
      let error = new Error();
      // error.status = 401;
      error.message = 'Incorrect name or password';
      throw error;
    }
}

User.byToken = async (token) => {
  try {
    // token already has info, just need to use verify to spit out
    let {id} = await jwt.verify(token, SECRET); //will give us the user id from payload
    let user = await User.findByPk(id);
    if (!user) {
      throw new Error('User not found with that token');
    } else return user;
  } catch (e) {
    const error = Error('bad token');
    error.status = 401;
    throw error;
  }


}

module.exports = User;
