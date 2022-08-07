console.log(localStorage.getItem('currentUser'));

var allUsers = JSON.parse(localStorage.getItem('currentUser'))
console.log(allUsers);

var count = Object.keys(allUsers).length
console.log(count)

var recentUser = allUsers[count-1];
console.log(recentUser);

