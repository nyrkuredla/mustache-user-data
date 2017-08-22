//make a function that
const data = require('./data')
const users = data.users;

function getUsers () {
  return data.users;
}

function getUser (userId) {
  let chosenUser = {}
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      chosenUser = users[i];
    };
  }
  return chosenUser
}



module.exports = {
  getUsers: getUsers,
  getUser: getUser,
}
