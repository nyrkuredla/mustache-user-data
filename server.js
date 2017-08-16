const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const userDal = require('./dal')

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))

//routes
app.get('/', function (req, res) {
  res.render('home')
})

app.get('/users', function (req, res) {
  //Fill in with users partial
  const users = userDal.getUsers();
  userDal.userAvailable();
  res.render('users', { users: users });
})

app.get('/users/:id', function (req, res) {
  const chosenUser = userDal.getUser(req.params.id);
  res.send(chosenUser);
  // if (chosenUser) {
  //   res.render('userDetail', chosenUser)
  // } else {
  //   res.send("I mustache you a question. Hahaha! Get it? ...No, but seriously, you have to enter a correct user ID up there, or else I can't help you.")
  // }
})


app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000!')
})
