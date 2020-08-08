'use strict';

const express = require('express');
const router = express.Router();
// const app = express();
const mainSchema = require('./models/users-model');
const basicAuth = require('./middleware/Basic');



router.post('/signup', async (req, res, next) => {
  try {
    let users = new mainSchema(req.body);
    let result = await users.save();
    let token = mainSchema.generateToken(result);
    console.log('show token', token);
    res.status(200).json({ users, token });
  } catch (e) {
    next('we have your data');
  }
});

router.post('/signin', basicAuth, (req, res) => {
  let token = mainSchema.generateToken(req.data);
  res.cookie('token', token);
  res.status(200).json({ 'token': req.token, 'user': req.data });
});



module.exports = router;









