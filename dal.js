//make a function that
const data = require('./data')
const users = data.users;

function getUsers () {
  return data.users;
}

function getUser (userId) {
  let chosenUser = {}
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      chosen = users[i];
    };
  }
  return chosenUser
}

function userAvailable () {
  let userJobs = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].job === null) {
      users[i].job = "Available for hire"
    }
    userJobs += users[i].job;
  }
  return userJobs;
}



module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  userAvailable: userAvailable
}
