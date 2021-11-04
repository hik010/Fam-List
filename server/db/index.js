// import db, all models
// define relationships between the models
// export all of them

const db = require('./db');
const User = require('./User');
const Task = require('./Task');

User.hasMany(Task);
Task.belongsTo(User);


module.exports = {
  db,
  User,
  Task
}
