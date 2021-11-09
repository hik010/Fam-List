const { User } = require('../db');

const router = require('express').Router();

router.post('/', async (req, res, next) => {
  // when login button pressed

  // find the user with the same name and password
  try {
    const token = await User.authenticate(req.body)
    res.json(token);
  } catch (e) {
    if (e.message === 'Incorrect name or password') res.status(401).send(e.message);
    else next(e);
    // next(e);
  }
  // if found => generate a new token and return
  // else, return error message
});

// router.get('/', (req, res, next) => {
//   try {
//     res.send('test');
//   } catch (e) {
//     next(e);
//   }
// });

router.use((req, res, next) => {
  const err = new Error('Auth route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
