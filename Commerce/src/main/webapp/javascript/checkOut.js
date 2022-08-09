//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(userStorage);

console.group("USER")
console.log(user)
console.log(user.userId);
console.log(user.userName);
console.groupEnd("USER");

//Finds user's cart and price and logs it
let cartStorage = localStorage.getItem('userCart');
let cart =JSON.parse(cartStorage);

// console.group("CART")
// console.log(cart);
// console.log(cart.cartTotalPrice);
// console.log(cart.totalQuantityOfProductsInCart);
// console.log(cart.cartAddress);
// console.log(cart.cartUser);
// console.groupEnd("CART")

//THIS WAS A TEST TO SEE ABOUT INTERPOLATING HTML CODE
//var FirstNameDisplay =`<input type="text" name="fname" placeholder=${user.userFirstName} id="fName"/>`

FirstName = document.getElementById("fName").value;
FirstNameDisplay = document.getElementById("fName");
document.getElementById("fName").innerHTML = `${user.userFirstName}`
FirstNameDisplay.innerHtml =`${user.userFirstName}`
console.log(FirstNameDisplay)

LastName = document.getElementById("lName").value;
emailInput = document.getElementById("emailInput").value;

emailInput.innerText = `${user.emailInput}`
addressInput = document.getElementById("addressInput").value;

Product1 = document.getElementById("Product1").value;

subtotal = document.getElementById("subtotal").value;

subtotalDisplay = document.getElementById("subtotal");
console.log(subtotalDisplay);
//THIS NEEDS TO BE CHANGED TO CART TOTAL
subtotalDisplay.innerText = `$${user.balance + user.balance * 400.49} and ${8+9}`

