const { User } = require('../db');

const router = require('express').Router();

// POST /auth/login
router.post('/login', async (req, res, next) => {
  // when login button pressed

  // find the user with the same name and password
  try {
    const token = await User.authenticate(req.body);
    res.json(token);
  } catch (e) {
    if (e.message === 'Incorrect name or password')
      res.status(401).send(e.message);
    else next(e);
  }
  // if found => generate a new token and return
  // else, return error message
});

// POST /auth/signup
router.post('/signup', async (req, res, next) => {
  // when signUp button pressed

  // find the user with the same name and password
  try {
    // req.body passing in name + password
    // will create a new account in the users table
    const token = await User.authenticate(req.body);
    res.json(token);
  } catch (e) {
    if (e.message === 'Incorrect name or password')
      res.status(401).send(e.message);
    else next(e);
  }
  // if found => generate a new token and return
  // else, return error message
});


// GET /auth ==> giving back user info
router.get('/', async (req, res, next) => {
  // when user has a token passed in
  try {
    const userInfo = await User.byToken(req.headers.authorization);
    res.json(userInfo);
  } catch (e) {
    next(e);
  }
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
