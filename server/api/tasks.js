const router = require('express').Router();
const {db, Task, User} = require('../db');

router.get('/', async (req,res,next) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks)

  } catch(e) {
    next(e);
  }
})

module.exports = router;
