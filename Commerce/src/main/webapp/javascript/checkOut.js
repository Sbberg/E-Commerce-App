//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(userStorage);
console.group("USER")
console.log(user.userId);
console.log(user.userName);
console.groupEnd("USER");

//Finds user's cart and price and logs it
let cartStorage = localStorage.getItem('userCart');
let cart =JSON.parse(cartStorage);
console.group("CART")
console.log(cart);
console.log(cart.cartTotalPrice);
console.log(cart.totalQuantityOfProductsInCart);
console.log(cart.cartAddress);
console.log(cart.cartUser);
console.groupEnd("CART")

var html =`<input type="text" id="search_name_1" data_id=${number} class="form-control add-member-on-policy-search"/>`

emailInput = document.getElementById("emailInput").value;
emailInput.innerText
addressInput = document.getElementById("addressInput").value;

Product1 = document.getElementById("Product1").value;
subtotal = document.getElementById("subtotal").value;
subtotalDisplay = document.getElementById("subtotal").value;
console.log(subtotalDisplay);
subtotalDisplay.textHtml = `$${totalPrice}`

