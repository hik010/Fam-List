const router = require('express').Router();
const {db, Task, User} = require('../db');

router.get('/', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.json(users)

  } catch(e) {
    next(e);
  }
})

module.exports = router;
