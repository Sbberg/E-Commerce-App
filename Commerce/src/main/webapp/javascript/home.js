console.log(localStorage.getItem('allUsers'));

var allUsers = JSON.parse(localStorage.getItem('allUsers'))
console.log(allUsers);

var count = Object.keys(allUsers).length;
console.log(count);

var recentUser = allUsers[count-1];
console.log(recentUser);
localStorage.setItem('recentUser' , JSON.stringify(recentUser));
        

