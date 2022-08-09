let button1 = document.getElementById("nicol")
let button2 = document.getElementById("Stephen Curry");
let button3 = document.getElementById("star wars");
let button4 = document.getElementById("Eleven");
let button5 = document.getElementById("Jack Skellington");
let button6 = document.getElementById("Deadpool");
let button7 = document.getElementById("drstrange");
let button8 = document.getElementById("grogu");
let button9 = document.getElementById("chucky");

//Getting Specific Amounts of Specific Products in Cart
var editNicolInCart = new Number(JSON.parse(localStorage.getItem('nicolInCart')));
console.log(editNicolInCart);
var nicolDisplay = document.getElementById("nicol");
nicolDisplay.innerText =`${editNicolInCart}`;

var editGroguInCart = new Number(JSON.parse(localStorage.getItem('groguInCart')));
console.log(editGroguInCart);
var groguDisplay = document.getElementById("grogu");
groguDisplay.innerText =`${editGroguInCart}`;

var editDrStrangeInCart = new Number(JSON.parse(localStorage.getItem('drStrangeInCart')));
console.log(editDrStrangeInCart);
var drStrangeDisplay = document.getElementById("drStrange");
drStrangeDisplay.innerText =`${editDrStrangeInCart}`;

var editStephenCurryInCart = new Number(JSON.parse(localStorage.getItem('stephenCurryInCart')));
console.log(editStephenCurryInCart);
var stephenCurryDisplay = document.getElementById("stephenCurry");
stephenCurryDisplay.innerText =`${editStephenCurryInCart}`;

var editStarWarsInCart = new Number(JSON.parse(localStorage.getItem('starWarsInCart')));
console.log(editStarWarsInCart);
var starWarsDisplay = document.getElementById("starWars");
starWarsDisplay.innerText =`${editStarWarsInCart}`;

var editElevenInCart = new Number(JSON.parse(localStorage.getItem('elevenInCart')));
console.log(editElevenInCart);
var elevenDisplay = document.getElementById("eleven");
elevenDisplay.innerText =`${editElevenInCart}`;

var editChuckyInCart = new Number(JSON.parse(localStorage.getItem('chuckyBrideInCart')));
console.log(editChuckyInCart);
var chuckyDisplay = document.getElementById("chucky");
chuckyDisplay.innerText =`${editChuckyInCart}`;

var editJackInCart = new Number(JSON.parse(localStorage.getItem('jackInCart')));
console.log(editJackInCart);
var jackSkellingtonDisplay = document.getElementById("jackSkellington");
jackSkellingtonDisplay.innerText =`${editJackInCart}`;

var editDeadpoolInCart = new Number(JSON.parse(localStorage.getItem('deadpoolInCart')));
console.log(editDeadpoolInCart);
var deadpoolDisplay = document.getElementById("deadpool");
deadpoolDisplay.innerText =`${editDeadpoolInCart}`;

getAllCarts();
async function getAllCarts(){
    try {
        const raw_response = await fetch(`http://localhost:8080/commerce/carts`,
        {
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*", 
            } 
        });

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const data = await raw_response.json();

        console.log(data);
        console.log(JSON.stringify(data));
        localStorage.setItem('allCarts',JSON.stringify(data));

    }catch(error){
        console.log(error)
    }
};

//Getting Current Cart
var allCarts = JSON.parse(localStorage.getItem('allCarts'));
console.log(allCarts);
var allCartsLength = allCarts.length;
console.log(allCartsLength-1);
var currentCart = allCarts[(allCartsLength-1)];
console.log(currentCart);

//Storing Current Cart
localStorage.setItem('currentCart',JSON.stringify(currentCart));


//Total Price of Cart sent from Home Page
var totalPrice = currentCart.cartTotalPrice;
console.log(totalPrice);
var totalPriceField = document.getElementById("totalPrice");
totalPriceField.innerText = `$ ${totalPrice}`;

//Total Amount of Items in Cart sent from Home Page
var totalItems = currentCart.totalQuantityOfProductsInCart;
var totalItemsField = document.getElementById("totalItems");
totalItemsField.innerText = `${totalItems} items`;






// let cartStorage = localStorage.getItem('currentCart');
// let cart =JSON.parse(cartStorage);

// console.group("CART")
// console.log(cart);
// console.log(cart.cartTotalPrice);
// console.log(cart.totalQuantityOfProductsInCart);
// console.log(cart.cartAddress);
// console.log(cart.cartUser);
// console.groupEnd("CART")

//THESE NEED TO BE DEFINED FOR THE CART
// let cartProduct1 = document.getElementById("cartProduct1");
// console.log(cartProduct1)
// let cartPrice1 = document.getElementById("cartPrice1");
// console.log(cartPrice1)

//THIS NEED PARENT REFERENCE
// let cartProduct1Display = document.getElementById("cartProduct1");
// cartProduct1Display.innerHTML = `${product.p_name}`;
// let cartPrice1Display = document.getElementById("cartPrice1");
// cartPrice1Display.innerHTML = `${p_price}`;

//this event auto activates. (or at least did as a console log.)
// button1.onclick = addToCart();

//needs to create cart for current user THEN add to cart
//if (whatever != null)


// async function addToCart(){

//     console.log()
//     try {
//         //this is currently a get method cause that is the default
//         const raw_response = await fetch (`http://localhost:8080/commerce/products`
//         //THIS CODE CAN BE USED TO CHANGE THE DEFAULT, INFO ISN'T CORRECT LIKE USER/CART ID
//         //,{
//     //     method: "POST",
//     //     Headers:{
//     //         "Content-Type":"application/json",
//     //         "Access-Control-Allow-Origin": "*",
//     //         "userId": cart.cartId
//     //     }
//     // }
//     );
//         if(!raw_response.ok){
//             throw new Error(raw_response.status)
//         }
//         console.log("Request complete")
//         const json_data = await raw_response.json();
//         //these will need to reference a parent class/local storage like the user i think
//         //look at profile/homepage.js for reference.
//         cartProduct1.innerText = `${cart.totalQuantityOfProductsInCart}`;
//         cartPrice1.innerText = `${cart.totalQuantityOfProductsInCart}`;
//     } catch (error) {
//         alert("Item not added" + error)
//     }
// };

// function cartPrice(){