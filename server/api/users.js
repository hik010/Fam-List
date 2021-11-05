const router = require('express').Router();
const {db, Task, User} = require('../db');
const color_options = [
  'fireBrick',
  'tan',
  'LightSeaGreen',
  'violet',
  'salmon',
  'SeaGreen',
  'orange',
  'MediumSlateBlue',
  'PaleVioletRed',
  'CornflowerBlue',
];

// GET /api/users
router.get('/', async (req,res,next) => {
  try {
    const users = await User.findAll();
    res.json(users)

  } catch(e) {
    next(e);
  }
})

// POST /api/users --> creates a new user

router.post('/', async (req,res,next) => {
  try{
    if(!req.body.color) req.body.color =  color_options[Math.floor(Math.random() * color_options.length)]
    const newUser = await User.create(req.body);
    res.json(newUser);

  } catch(e){
    next(e);
  }
})


module.exports = router;
