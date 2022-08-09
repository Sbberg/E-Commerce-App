var cart = [];
var userStorage = JSON.parse(localStorage.getItem('currentUser'));
console.log(userStorage);
var cartUser = userStorage.userId;
console.log(cartUser);
var cartAddress = userStorage.address;
console.log(cartAddress);
//var totalProducts = 0;
var totalProducts=new Number(0);


function cartProductNicol(){
    var a = new Number(document.getElementById("nicol").value);

    totalProducts = totalProducts + a;
    console.log(a);
    console.log(totalProducts);
}
function cartProductStephen(){
}
function cartProductBadBatch(){
}
function cartProductEleven(){
}
function cartProductJack(){
}
function cartProductDeadpool(){
}
function cartProductStrange(){
}
function cartProductGrogu(){
}
function cartProductChucky(){
}


// var allUsers = JSON.parse(localStorage.getItem('currentUser'))
// console.log(allUsers);

// var count = Object.keys(allUsers).length;
// console.log(count);

// var recentUser = allUsers[count-1];
// console.log(recentUser);
// localStorage.setItem('recentUser',JSON.stringify(recentUser));



//let cartInventory = localStorage.setItem('productStorage')