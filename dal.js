//make a function that
const data = require('./data')
const users = data.users;

function getUsers () {
  return data.users;
}

function getSingleUser (userId) {
  let singleUser = {};
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      singleUser = users[i]
    };
  }
  return singleUser
}

function userAvailable () {
  let userJobs = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].job === null) {
      users[i].job = "Available for hire."
    }
    userJobs += users[i].job;
  }
  return userJobs;
}

module.exports = {
  getUsers: getUsers,
  getSingleUser: getSingleUser,
  userAvailable: userAvailable
}
