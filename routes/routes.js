const express = require('express')
const router = express.Router()
const dal = require('../dal')

router
  .route('/')
  .get(function (req, res) {
    res.render('home')
  })

router
  .route('/users')
  .get(function (req, res) {
    //Fill in with users partial
    const users = dal.getUsers();
    res.render('users', { users: users });
  })

router
  .route('/users/:id')
  .get(function (req, res) {
    const chosenUser = dal.getUser(req.params.id);
    if (chosenUser) {
      res.render('userDetail', chosenUser)
    } else {
      res.send("I mustache you a question. Hahaha! Get it? ...No, but seriously, you have to enter a correct user ID up there, or else I can't help you.")
    }
  })



  module.exports = router
