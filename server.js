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
  const users = userDal.getUsers();
  userDal.userAvailable();
  res.render('home', {  })

})

app.get('/users', function (req, res) {
  //Fill in with users partial
  res.send("User directory page, under construction");
})

app.get('users/:id', function (req, res) {
  //Fill in with user detail partial
  res.send("This is where you'll find details about one user.");
})

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3000!')
})
