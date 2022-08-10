// let button1 = document.getElementById("nicol")
// let button2 = document.getElementById("Stephen Curry");
// let button3 = document.getElementById("star wars");
// let button4 = document.getElementById("Eleven");
// let button5 = document.getElementById("Jack Skellington");
// let button6 = document.getElementById("Deadpool");
// let button7 = document.getElementById("drstrange");
// let button8 = document.getElementById("grogu");
// let button9 = document.getElementById("chucky");

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


//Total Amount of Items in Cart sent from Home Page
var totalItems = currentCart.totalQuantityOfProductsInCart;
var totalItemsField = document.getElementById("totalItems");

var newAmt1;
var newAmt2;
var newAmt3;
var newAmt4;
var newAmt5;
var newAmt6;
var newAmt7;
var newAmt8;
var newAmt9;

var newPrice1;
var newPrice2;
var newPrice3;
var newPrice4;
var newPrice5;
var newPrice6;
var newPrice7;
var newPrice8;
var newPrice9;


//TOTAL CART PRODUCT QUANTITY AFTER ADJUSTMENTS
function addUpNewAmts(event){
    event.preventDefault;

    currentCart.totalQuantityOfProductsInCart = newAmt1+newAmt2+newAmt3+newAmt4+newAmt5+newAmt6+newAmt7+newAmt8+newAmt9;
    currentCart.cartTotalPrice = newPrice1+newPrice2+newPrice3+newPrice4+newPrice5+newPrice6+newPrice7+newPrice8+newPrice9;

    window.location.replace("checkOut.html");
}

//Onclick Button Updates
function changeNicolAmt(event){
    event.preventDefault;

    var newAmt1 = document.getElementById("nicolSelector").value;
    nicolInCart = newAmt1;
    localStorage.setItem('nicolInCart' , JSON.stringify(nicolInCart))
    console.log(nicolInCart);
    var pricestring1 = document.getElementById("cartPrice1").innerText;
    let price1 = new Number(pricestring1.slice(1,pricestring1.length));
    let newPrice1 = price1 * newAmt1;
    console.log(newPrice1)

    if(newAmt1 > JSON.parse(localStorage.getItem('nicolInCart'))){
        totalPrice = totalPrice + (newPrice1-totalPrice);
        currentCart.cartTotalPrice = totalPrice;
        localStorage.setItem('nicolInCart', JSON.stringify(newAmt1))
        console.log(JSON.parse(localStorage.getItem('nicolInCart')))
        console.log(currentCart.totalQuantityOfProductsInCart)

    } else if(newAmt1 < JSON.parse(localStorage.getItem('nicolInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice1);
        currentCart.cartTotalPrice = totalPrice;
        localStorage.setItem('nicolInCart', JSON.stringify(newAmt1))
        console.log(JSON.parse(localStorage.getItem('nicolInCart')))

    } else {
        currentCart.cartTotalPrice = totalPrice;
        localStorage.setItem('nicolInCart', JSON.stringify(newAmt1))
        console.log(JSON.parse(localStorage.getItem('nicolInCart')))
    }
}

console.log(newAmt1);

function changeGroguAmt(event){
    event.preventDefault;

    let newAmt2 = document.getElementById("groguSelector").value;
    groguInCart = newAmt2;
    localStorage.setItem('groguInCart' , JSON.stringify(groguInCart));
    console.log(groguInCart);

    var pricestring2 = document.getElementById("cartPrice2").innerText;
    let price2 = new Number(pricestring2.slice(1,pricestring2.length));
    let newPrice2 = price2 * newAmt2;
    console.log(newPrice2);
}



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