// let button1 = document.getElementById("nicol")
// let button2 = document.getElementById("Stephen Curry");
// let button3 = document.getElementById("star wars");
// let button4 = document.getElementById("Eleven");
// let button5 = document.getElementById("Jack Skellington");
// let button6 = document.getElementById("Deadpool");
// let button7 = document.getElementById("drstrange");
// let button8 = document.getElementById("grogu");
// let button9 = document.getElementById("chucky");

let c_Cart = JSON.parse(localStorage.getItem('currentCart'))


//Getting Specific Amounts of Specific Products in Cart and displaying their names
var editNicolInCart = Number(JSON.parse(localStorage.getItem('nicolInCart')));
var nicolDisplay = document.getElementById("nicol");
nicolDisplay.innerText =`${editNicolInCart}`;

var editGroguInCart = Number(JSON.parse(localStorage.getItem('groguInCart')));
var groguDisplay = document.getElementById("grogu");
groguDisplay.innerText =`${editGroguInCart}`;

var editDrStrangeInCart = Number(JSON.parse(localStorage.getItem('drStrangeInCart')));
var drStrangeDisplay = document.getElementById("drStrange");
drStrangeDisplay.innerText =`${editDrStrangeInCart}`;

var editStephenCurryInCart = Number(JSON.parse(localStorage.getItem('stephenCurryInCart')));
var stephenCurryDisplay = document.getElementById("stephenCurry");
stephenCurryDisplay.innerText =`${editStephenCurryInCart}`;

var editStarWarsInCart = Number(JSON.parse(localStorage.getItem('starWarsInCart')));
var starWarsDisplay = document.getElementById("starWars");
starWarsDisplay.innerText =`${editStarWarsInCart}`;

var editElevenInCart = Number(JSON.parse(localStorage.getItem('elevenInCart')));
var elevenDisplay = document.getElementById("eleven");
elevenDisplay.innerText =`${editElevenInCart}`;

var editChuckyInCart = Number(JSON.parse(localStorage.getItem('chuckyBrideInCart')));
var chuckyDisplay = document.getElementById("chucky");
chuckyDisplay.innerText =`${editChuckyInCart}`;

var editJackInCart = Number(JSON.parse(localStorage.getItem('jackInCart')));
var jackSkellingtonDisplay = document.getElementById("jackSkellington");
jackSkellingtonDisplay.innerText =`${editJackInCart}`;

var editDeadpoolInCart = Number(JSON.parse(localStorage.getItem('deadpoolInCart')));
var deadpoolDisplay = document.getElementById("deadpool");
deadpoolDisplay.innerText =`${editDeadpoolInCart}`;


//Total Price of Cart sent from Home Page
var totalPrice = Number(c_Cart.cartTotalPrice);
var totalPriceField = document.getElementById("totalPrice");
totalPriceField.innerText = `$${c_Cart.cartTotalPrice}`


//Total Amount of Items in Cart sent from Home Page
var totalItems = c_Cart.totalQuantityOfProductsInCart;
var totalItemsField = document.getElementById("totalItems");

var newAmt1 = editNicolInCart;
var newAmt2 = editGroguInCart;
var newAmt3 = editDrStrangeInCart;
var newAmt4 = editStephenCurryInCart;
var newAmt5 = editStarWarsInCart;
var newAmt6 = editElevenInCart;
var newAmt7 = editChuckyInCart;
var newAmt8 = editJackInCart;
var newAmt9 = editDeadpoolInCart;

var newPrice1;
var newPrice2;
var newPrice3;
var newPrice4;
var newPrice5;
var newPrice6;
var newPrice7;
var newPrice8;
var newPrice9;


//logs all the local product amounts
console.group("Local Products")
console.log("amt1: " + typeof(newAmt1))
console.log("amt2: " + typeof(newAmt2))
console.log(editNicolInCart);
console.log(editGroguInCart);
console.log(editDrStrangeInCart);
console.log(editStephenCurryInCart);
console.log(editStarWarsInCart);
console.log(editElevenInCart);
console.log(editChuckyInCart);
console.log(editJackInCart);
console.log(editDeadpoolInCart);
console.groupEnd("Local Products")

console.log("Total Price: " + totalPrice.toFixed());
console.log("Total Price type: " + typeof(Number(totalPrice.toFixed())) + " " + Number(totalPrice.toFixed(2)) );
console.log("TotalQuantity: " + c_Cart.totalQuantityOfProductsInCart)
console.log("TotalQuantity Type: " + typeof(c_Cart.totalQuantityOfProductsInCart))

async function totalUpdate(){
    cartNum = Number(newAmt1)+Number(newAmt2)+Number(newAmt3)+Number(newAmt4)+Number(newAmt5)+Number(newAmt6)+Number(newAmt7)+Number(newAmt8)+Number(newAmt9);
    console.log("CartNum: " + cartNum)
    c_Cart.totalQuantityOfProductsInCart = Number(cartNum);
    
    console.log(c_Cart.totalQuantityOfProductsInCart)
    localStorage.setItem('currentCart' , JSON.stringify(c_Cart));    
    setTimeout(()=>{
        window.location.reload();
    }, 6000)
    
}

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
// var allCarts = JSON.parse(localStorage.getItem('allCarts'));
// var allCartsLength = allCarts.length;
// var currentCart = allCarts[(allCartsLength-1)];

//Storing Current Cart
//localStorage.setItem('currentCart',JSON.stringify(currentCart));


//TOTAL CART PRODUCT QUANTITY AFTER ADJUSTMENTS
function addUpNewAmts(event){
    event.preventDefault;

    
    
    window.location.replace("checkOut.html");
}


//------------------------------------------------------------------------------------------


//Onclick Button Updates

//THIS IS PRODUCT 1
function changeNicolAmt(event){
    event.preventDefault();

    newAmt1 = document.getElementById("nicolSelector").value;
    nicolInCart = newAmt1;
    localStorage.setItem('nicolInCart' , JSON.stringify(nicolInCart))


    console.log("Amount: " + nicolInCart);
    var pricestring1 = document.getElementById("cartPrice1").innerText;
    let price1 = new Number(pricestring1.slice(1,pricestring1.length));
    console.log("Price 1: " + price1)
    newPrice1 = price1 * newAmt1;
    console.log(newPrice1)

    if(newAmt1 > JSON.parse(localStorage.getItem('nicolInCart'))){
        totalPrice = totalPrice + (newPrice1-totalPrice);        
        localStorage.setItem('nicolInCart', JSON.stringify(newAmt1))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('nicolInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt1 < JSON.parse(localStorage.getItem('nicolInCart'))){
        
        totalPrice = totalPrice - (totalPrice-newPrice1);
        console.log()
        localStorage.setItem('nicolInCart', JSON.stringify(newAmt1))
        console.log(JSON.parse(localStorage.getItem('nicolInCart')))

    } else {        
        localStorage.setItem('nicolInCart', JSON.stringify(newAmt1))
        console.log(JSON.parse(localStorage.getItem('nicolInCart')))
    }
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate();
    
}


//================================================================================


//THIS IS PRODUCT 2
function changeGroguAmt(event){
    event.preventDefault();

    newAmt2 = document.getElementById("groguSelector").value;
    groguInCart = newAmt2;
    localStorage.setItem('groguInCart' , JSON.stringify(groguInCart))


    console.log("Amount: " + groguInCart);
    var pricestring2 = document.getElementById("cartPrice2").innerText;
    let price2 = new Number(pricestring2.slice(1,pricestring2.length));
    newPrice2 = price2 * newAmt2;
    console.log(newPrice2)

    if(newAmt2 > JSON.parse(localStorage.getItem('groguInCart'))){
        totalPrice = totalPrice + (newPrice2-totalPrice);
        
        localStorage.setItem('groguInCart', JSON.stringify(newAmt2))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('groguInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt2 < JSON.parse(localStorage.getItem('groguInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice2);
        
        localStorage.setItem('groguInCart', JSON.stringify(newAmt2))
        console.log(JSON.parse(localStorage.getItem('groguInCart')))

    } else {        
        localStorage.setItem('groguInCart', JSON.stringify(newAmt2))
        console.log(JSON.parse(localStorage.getItem('groguInCart')))
    }
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}

//================================================================================

//THIS IS PRODUCT 3
function changeStrangeAmt(event){
    event.preventDefault();


    newAmt3 = document.getElementById("drStrangeSelector").value;
    drStrangeInCart = newAmt3;
    localStorage.setItem('drStrangeInCart' , JSON.stringify(drStrangeInCart))


    console.log("Amount: " + drStrangeInCart);
    var pricestring3 = document.getElementById("cartPrice3").innerText;
    let price3 = new Number(pricestring3.slice(1,pricestring3.length));
    newPrice3 = price3 * newAmt3;
    console.log(newPrice3)

    if(newAmt3 > JSON.parse(localStorage.getItem('drStrangeInCart'))){
        totalPrice = totalPrice + (newPrice3-totalPrice);
        
        localStorage.setItem('drStrangeInCart', JSON.stringify(newAmt3))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('drStrangeInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt3 < JSON.parse(localStorage.getItem('nicolInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice3);
       
        localStorage.setItem('drStrangeInCart', JSON.stringify(newAmt3))
        console.log(JSON.parse(localStorage.getItem('drStrangeInCart')))

    } else {        
        localStorage.setItem('drStrangeInCart', JSON.stringify(newAmt3))
        console.log(JSON.parse(localStorage.getItem('drStrangeInCart')))
    }
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()
}

//================================================================================

//THIS IS PRODUCT 4
function changeCurryAmt(event){
    event.preventDefault();



    newAmt4 = document.getElementById("stephenCurrySelector").value;
    stephenCurryInCart = newAmt4;
    localStorage.setItem('stephenCurryInCart' , JSON.stringify(stephenCurryInCart))


    console.log("Amount: " + stephenCurryInCart);
    var pricestring4 = document.getElementById("cartPrice4").innerText;
    let price4 = new Number(pricestring4.slice(1,pricestring4.length));
    newPrice4 = price4 * newAmt4;
    console.log(newPrice4)

    if(newAmt4 > JSON.parse(localStorage.getItem('stephenCurryInCart'))){
        totalPrice = totalPrice + (newPrice4-totalPrice);
        localStorage.setItem('stephenCurryInCart', JSON.stringify(newAmt4))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('stephenCurryInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt4 < JSON.parse(localStorage.getItem('stephenCurryInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice4);        
        localStorage.setItem('stephenCurryInCart', JSON.stringify(newAmt4))
        console.log(JSON.parse(localStorage.getItem('stephenCurryInCart')))

    } else {        
        localStorage.setItem('stephenCurryInCart', JSON.stringify(newAmt4))
        console.log(JSON.parse(localStorage.getItem('stephenCurryInCart')))
    }
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}


//================================================================================


//THIS IS PRODUCT 5
function changeBatchAmt(event){
    event.preventDefault();


    newAmt5 = document.getElementById("starWarsSelector").value;
    starWarsInCart = newAmt5;
    localStorage.setItem('starWarsInCart' , JSON.stringify(starWarsInCart))


    console.log("Amount: " + starWarsInCart);
    var pricestring5 = document.getElementById("cartPrice5").innerText;
    let price5 = new Number(pricestring5.slice(1,pricestring5.length));
    newPrice5 = price5 * newAmt5;
    console.log(newPrice5)

    if(newAmt5 > JSON.parse(localStorage.getItem('starWarsInCart'))){
        totalPrice = totalPrice + (newPrice5-totalPrice);
       
        localStorage.setItem('starWarsInCart', JSON.stringify(newAmt5))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('starWarsInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt5 < JSON.parse(localStorage.getItem('starWarsInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice5);
        
        localStorage.setItem('starWarsInCart', JSON.stringify(newAmt5))
        console.log(JSON.parse(localStorage.getItem('starWarsInCart')))

    } else {        
        localStorage.setItem('starWarsInCart', JSON.stringify(newAmt5))
        console.log(JSON.parse(localStorage.getItem('starWarsInCart')))
    }
            c_Cart.cartTotalPrice = totalPrice;
            totalUpdate()


}

//================================================================================

//THIS IS PRODUCT 6
function changeWafflesAmt(event){
    event.preventDefault();


    newAmt6 = document.getElementById("elevenSelector").value;
    elevenInCart = newAmt6;
    localStorage.setItem('elevenInCart' , JSON.stringify(elevenInCart))


    console.log("Amount: " + elevenInCart);
    var pricestring6 = document.getElementById("cartPrice6").innerText;
    let price6 = new Number(pricestring6.slice(1,pricestring6.length));
    newPrice6 = price6 * newAmt6;
    console.log(newPrice6)

    if(newAmt6 > JSON.parse(localStorage.getItem('nicolInelevenInCartCart'))){
        totalPrice = totalPrice + (newPrice6-totalPrice);
        
        localStorage.setItem('elevenInCart', JSON.stringify(newAmt6))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('elevenInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt6 < JSON.parse(localStorage.getItem('elevenInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice6);
       
        localStorage.setItem('elevenInCart', JSON.stringify(newAmt6))
        console.log(JSON.parse(localStorage.getItem('elevenInCart')))

    } else {        
        localStorage.setItem('elevenInCart', JSON.stringify(newAmt6))
        console.log(JSON.parse(localStorage.getItem('elevenInCart')))
    }

    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}


//================================================================================

//THIS IS PRODUCT 7
function changeChuckyAmt(event){
    event.preventDefault();

    newAmt7 = document.getElementById("chuckySelector").value;
    chuckyBrideInCart = newAmt7;
    localStorage.setItem('chuckyBrideInCart' , JSON.stringify(chuckyBrideInCart))


    console.log("Amount: " + chuckyBrideInCart);
    var pricestring7 = document.getElementById("cartPrice7").innerText;
    let price7 = new Number(pricestring7.slice(1,pricestring7.length));
    newPrice7 = price7 * newAmt7;
    console.log(newPrice7)

    if(newAmt7 > JSON.parse(localStorage.getItem('chuckyBrideInCart'))){
        totalPrice = totalPrice + (newPrice7-totalPrice);
        
        localStorage.setItem('chuckyBrideInCart', JSON.stringify(newAmt7))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('chuckyBrideInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt7 < JSON.parse(localStorage.getItem('chuckyBrideInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice7);
        
        localStorage.setItem('chuckyBrideInCart', JSON.stringify(newAmt7))
        console.log(JSON.parse(localStorage.getItem('chuckyBrideInCart')))

    } else {        
        localStorage.setItem('chuckyBrideInCart', JSON.stringify(newAmt7))
        console.log(JSON.parse(localStorage.getItem('chuckyBrideInCart')))
    }
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}

//================================================================================

//THIS IS PRODUCT 8
function changeJackAmt(event){
    event.preventDefault();


    newAmt8 = document.getElementById("jackSkellingtonSelector").value;
    jackInCart = newAmt8;
    localStorage.setItem('jackInCart' , JSON.stringify(jackInCart))


    console.log("Amount: " + jackInCart);
    var pricestring8 = document.getElementById("cartPrice8").innerText;
    let price8 = new Number(pricestring8.slice(1,pricestring8.length));
    newPrice8 = price8 * newAmt8;
    console.log(newPrice8)

    if(newAmt8 > JSON.parse(localStorage.getItem('jackInCart'))){
        totalPrice = totalPrice + (newPrice8-totalPrice);
        
        localStorage.setItem('jackInCart', JSON.stringify(newAmt8))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('jackInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt8 < JSON.parse(localStorage.getItem('jackInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice8);
        
        localStorage.setItem('jackInCart', JSON.stringify(newAmt8))
        console.log(JSON.parse(localStorage.getItem('jackInCart')))

    } else {        
        localStorage.setItem('jackInCart', JSON.stringify(newAmt8))
        console.log(JSON.parse(localStorage.getItem('jackInCart')))
    }

    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}

//================================================================================

//THIS IS PRODUCT 9
function changeBobAmt(event){
    event.preventDefault();


    newAmt9 = document.getElementById("deadpoolSelector").value;
    deadpoolInCart = newAmt9;
    localStorage.setItem('deadpoolInCart' , JSON.stringify(deadpoolInCart))
    var pricestring9 = document.getElementById("cartPrice9").innerText;
    let price9 = new Number(pricestring9.slice(1,pricestring9.length));
    newPrice9 = price9 * newAmt9;
    console.log("Amount: " + deadpoolInCart);    
    
    console.log(newPrice9)

    if(newAmt9 > JSON.parse(localStorage.getItem('deadpoolInCart'))){
        totalPrice = totalPrice + (newPrice9-totalPrice);
        
        localStorage.setItem('deadpoolInCart', JSON.stringify(newAmt9))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('deadpoolInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt9 < JSON.parse(localStorage.getItem('nicolInCart'))){
        totalPrice = totalPrice - (totalPrice-newPrice9);
        
        localStorage.setItem('deadpoolInCart', JSON.stringify(newAmt9))
        console.log(JSON.parse(localStorage.getItem('deadpoolInCart')))

    } else {        
        localStorage.setItem('deadpoolInCart', JSON.stringify(newAmt9))
        console.log(JSON.parse(localStorage.getItem('deadpoolInCart')))
    }

    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}


/////////////////////////////////////////////////////////////////////////////////////////////
                        /* END OF CODE */
/////////////////////////////////////////////////////////////////////////////////////////////





/*

function changeGroguAmt(event){
    event.preventDefault;

    newAmt2 = document.getElementById("groguSelector").value;
    groguInCart = newAmt2;
    localStorage.setItem('groguInCart' , JSON.stringify(groguInCart));
    console.log(groguInCart);

    var pricestring2 = document.getElementById("cartPrice2").innerText;
    let price2 = new Number(pricestring2.slice(1,pricestring2.length));
    newPrice2 = price2 * newAmt2;
    console.log(newPrice2);
}

*/

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