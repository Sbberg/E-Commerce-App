
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
totalPriceField.innerText = `$${c_Cart.cartTotalPrice.toFixed(2)}`


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


console.log("Total Price type: " + typeof(Number(totalPrice.toFixed()))  + Number(totalPrice.toFixed(2)) );
console.log("TotalQuantity: " + c_Cart.totalQuantityOfProductsInCart + " " + typeof(c_Cart.totalQuantityOfProductsInCart))


//Update function that is called on confirm Amount
async function totalUpdate(){
    console.group("UpdateFunction")
    //Quantity
    cartNum = Number(newAmt1)+Number(newAmt2)+Number(newAmt3)+Number(newAmt4)+Number(newAmt5)+Number(newAmt6)+Number(newAmt7)+Number(newAmt8)+Number(newAmt9);
    console.log("CartNum: " + cartNum)
    c_Cart.totalQuantityOfProductsInCart = Number(cartNum);
    c_Cart.cartTotalPrice = totalPrice;
    
    //Price
    //c_Cart.cartTotalPrice = Number(c_Cart.cartTotalPrice) + Number(newAmt1 * newPrice1)+Number(newAmt2* newPrice2)+Number(newAmt3 * newPrice3)+Number(newAmt4* newPrice4)+Number(newAmt5* newPrice5)+Number(newAmt6* newPrice6)+Number(newAmt7* newPrice7)+Number(newAmt8* newPrice8)+Number(newAmt9* newPrice9)
    console.log("CartTotalPrice: " + c_Cart.cartTotalPrice)
    console.log(c_Cart.totalQuantityOfProductsInCart)
    localStorage.setItem('currentCart' , JSON.stringify(c_Cart));    
    //setTimeout(()=>{
        window.location.reload();
    //}, 5000)
    console.groupEnd("UpdateFunction")
}


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
    console.log("NewAmt1 " + typeof(newAmt1) + newAmt1)
    nicolInCart = JSON.parse(localStorage.getItem('nicolInCart'))
    console.log("nicolincart " + typeof(nicolInCart) + nicolInCart)
    


    console.log("Amount: " + nicolInCart);
    var pricestring1 = document.getElementById("cartPrice1").innerText;
    let price1 = Number(pricestring1.slice(1,pricestring1.length));
    console.log("Price 1: " + typeof(price1) + price1)
    newPrice1 = price1 * newAmt1;
    console.log("new price 1:" + newPrice1)
    

    if(Number(newAmt1) > Number(JSON.parse(localStorage.getItem('nicolInCart')))){

        //Total price
        oldAmount = Number(JSON.parse(localStorage.getItem('nicolInCart'))) * price1
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice1;        
        nicolInCart = Number(newAmt1);

        //console checks
        console.log("IF");
        console.log("Old Amount: "+ oldAmount)
        console.log("TPrice: "+ typeof(totalPrice) + totalPrice); 
        console.log("New Price "+ typeof(newPrice1) + newPrice1);         
        console.log("Quantity of products: " + JSON.parse(localStorage.getItem('nicolInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

        //set local storage
        localStorage.setItem('nicolInCart', newAmt1)
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))

    } else if(Number(newAmt1) < Number(JSON.parse(localStorage.getItem('nicolInCart')))){
        
        //Total price
        oldAmount = Number(JSON.parse(localStorage.getItem('nicolInCart'))) * price1
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice1;    
        nicolInCart = Number(newAmt1);

        //console check and data save
        console.log("ELSE IF")        
        console.log(JSON.parse(localStorage.getItem('nicolInCart')))
        console.log("New Price "+ typeof(newPrice1) +newPrice1)
        console.log("TPrice: "+ typeof(totalPrice) + totalPrice)
        console.log("New Price "+ typeof(newPrice1) + newPrice1);         
        console.log("Quantity of products: " + JSON.parse(localStorage.getItem('nicolInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

        //sets local storage 
        localStorage.setItem('nicolInCart', newAmt1)
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log(c_Cart)
    } else {        
        
        console.log("ELSE")
        console.log(typeof(Number(JSON.parse(localStorage.getItem('nicolInCart')))) + Number(JSON.parse(localStorage.getItem('nicolInCart'))))
        localStorage.setItem('nicolInCart', newAmt1)
        nicolInCart = Number(newAmt1);
    }

    c_Cart.cartTotalPrice = totalPrice;
    console.log("c_CART: "+ typeof(c_Cart.cartTotalPrice) + c_Cart.cartTotalPrice)
    totalUpdate();
    
}


//================================================================================


//THIS IS PRODUCT 2
function changeGroguAmt(event){
    event.preventDefault();

    newAmt2 = document.getElementById("groguSelector").value;
    groguInCart =  JSON.parse(localStorage.getItem('groguInCart'))
    


    console.log("Amount: " + groguInCart);
    var pricestring2 = document.getElementById("cartPrice2").innerText;
    let price2 = Number(pricestring2.slice(1,pricestring2.length));
    newPrice2 = price2 * newAmt2;
    console.log(newPrice2);

    if(newAmt2 > JSON.parse(localStorage.getItem('groguInCart'))){
        oldAmount = Number(JSON.parse(localStorage.getItem('groguInCart'))) * price2
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice2;
        groguInCart = Number(newAmt2);


        localStorage.setItem('groguInCart', newAmt2)
        console.log("Price of products: " + JSON.parse(localStorage.getItem('groguInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
    } else if(newAmt2 < JSON.parse(localStorage.getItem('groguInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('groguInCart'))) * price2
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice2;
        groguInCart = Number(newAmt2);

        localStorage.setItem('groguInCart', newAmt2)
        console.log(JSON.parse(localStorage.getItem('groguInCart')))
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
    } else {        
        localStorage.setItem('groguInCart', newAmt2)
        console.log(JSON.parse(localStorage.getItem('groguInCart')))
        groguInCart = Number(newAmt2);
    }

    groguInCart = Number(newAmt2);
    c_Cart.cartTotalPrice = Number(totalPrice);
    totalUpdate()

}

//================================================================================

//THIS IS PRODUCT 3
function changeStrangeAmt(event){
    event.preventDefault();


    newAmt3 = document.getElementById("drStrangeSelector").value;
    drStrangeInCart = JSON.parse(localStorage.getItem('drStrangeInCart'))
   


    console.log("Amount: " + drStrangeInCart);
    var pricestring3 = document.getElementById("cartPrice3").innerText;
    let price3 = Number(pricestring3.slice(1,pricestring3.length));
    newPrice3 = price3 * newAmt3;
    console.log(newPrice3)

    if(newAmt3 > JSON.parse(localStorage.getItem('drStrangeInCart'))){
        oldAmount = Number(JSON.parse(localStorage.getItem('drStrangeInCart'))) * price3
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice3;
        drStrangeInCart = Number(newAmt3);
        
        localStorage.setItem('drStrangeInCart', newAmt3)
        console.log("Price of products: " + JSON.parse(localStorage.getItem('drStrangeInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))

    } else if(newAmt3 < JSON.parse(localStorage.getItem('drStrangeInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('drStrangeInCart'))) * price3
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice3
        drStrangeInCart = Number(newAmt3);
        
       
        localStorage.setItem('drStrangeInCart', (newAmt3))
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log(JSON.parse(localStorage.getItem('drStrangeInCart')))

    } else {        
        localStorage.setItem('drStrangeInCart', newAmt3);
        console.log(JSON.parse(localStorage.getItem('drStrangeInCart')))
        drStrangeInCart = newAmt3;
    }

    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()
}

//================================================================================

//THIS IS PRODUCT 4
function changeCurryAmt(event){
    event.preventDefault();

    newAmt4 = document.getElementById("stephenCurrySelector").value;
    stephenCurryInCart = JSON.parse(localStorage.getItem('stephenCurryInCart'))
    


    console.log("Amount: " + stephenCurryInCart);
    var pricestring4 = document.getElementById("cartPrice4").innerText;
    let price4 = Number(pricestring4.slice(1,pricestring4.length));
    newPrice4 = price4 * newAmt4;
    console.log(newPrice4)

    if(newAmt4 > Number(JSON.parse(localStorage.getItem('stephenCurryInCart')))){
        
        
        oldAmount = Number(JSON.parse(localStorage.getItem('stephenCurryInCart'))) * price4;
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice4;

        console.log("Price of products: " + JSON.parse(localStorage.getItem('stephenCurryInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)
        stephenCurryInCart = newAmt4;

        localStorage.setItem('stephenCurryInCart', newAmt4);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));

    } else if(newAmt4 < JSON.parse(localStorage.getItem('stephenCurryInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('stephenCurryInCart'))) * price4;
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice4;       
        stephenCurryInCart = newAmt4;
        console.log(JSON.parse(localStorage.getItem('stephenCurryInCart')))

        localStorage.setItem('stephenCurryInCart', newAmt4)
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))

    } else {  
        stephenCurryInCart = newAmt4;      
        localStorage.setItem('stephenCurryInCart', newAmt4);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log(JSON.parse(localStorage.getItem('stephenCurryInCart')))
    }

    stephenCurryInCart = newAmt4;
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}


//================================================================================


//THIS IS PRODUCT 5
function changeBatchAmt(event){
    event.preventDefault();


    newAmt5 = document.getElementById("starWarsSelector").value;
    starWarsInCart = JSON.parse(localStorage.getItem('starWarsInCart'))
    


    console.log("Amount: " + starWarsInCart);
    var pricestring5 = document.getElementById("cartPrice5").innerText;
    let price5 = Number(pricestring5.slice(1,pricestring5.length));
    newPrice5 = price5 * newAmt5;
    console.log(newPrice5)

    if(newAmt5 > JSON.parse(localStorage.getItem('starWarsInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('starWarsInCart'))) * price5
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice5;       
        starWarsInCart = newAmt5;
       
        localStorage.setItem('starWarsInCart', newAmt5);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));
        console.log("Price of products: " + JSON.parse(localStorage.getItem('starWarsInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt5 < JSON.parse(localStorage.getItem('starWarsInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('starWarsInCart'))) * price5
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice5;
        starWarsInCart = newAmt5;
        
        localStorage.setItem('starWarsInCart', newAmt5);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log(JSON.parse(localStorage.getItem('starWarsInCart')))

    } else {        
        localStorage.setItem('starWarsInCart', newAmt5);
        console.log(JSON.parse(localStorage.getItem('starWarsInCart')))
    }

    starWarsInCart = newAmt5;
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()


}

//================================================================================

//THIS IS PRODUCT 6
function changeWafflesAmt(event){
    event.preventDefault();


    newAmt6 = document.getElementById("elevenSelector").value;
    elevenInCart = JSON.parse(localStorage.getItem('elevenInCart'))
    


    console.log("Amount: " + elevenInCart);
    var pricestring6 = document.getElementById("cartPrice6").innerText;
    let price6 = Number(pricestring6.slice(1,pricestring6.length));
    newPrice6 = price6 * newAmt6;
    console.log(newPrice6)

    if(newAmt6 > JSON.parse(localStorage.getItem('elevenInCartCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('elevenInCartCart'))) * price6
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice6;
        elevenInCartCart = newAmt6;
        
        localStorage.setItem('elevenInCart', newAmt6);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));
        console.log("Price of products: " + JSON.parse(localStorage.getItem('elevenInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt6 < JSON.parse(localStorage.getItem('elevenInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('elevenInCart'))) * price6
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice6; 
        elevenInCart = newAmt6;
       
        localStorage.setItem('elevenInCart', newAmt6);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log(JSON.parse(localStorage.getItem('elevenInCart')))

    } else {        
        localStorage.setItem('elevenInCart', newAmt6);
        console.log(JSON.parse(localStorage.getItem('elevenInCart')))
        elevenInCart = newAmt6;
    }

    elevenInCart = newAmt6;
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}


//================================================================================

//THIS IS PRODUCT 7
function changeChuckyAmt(event){
    event.preventDefault();

    newAmt7 = document.getElementById("chuckySelector").value;
    chuckyBrideInCart = JSON.parse(localStorage.getItem('chuckyBrideInCart'))
    

    console.log("Amount: " + chuckyBrideInCart);
    var pricestring7 = document.getElementById("cartPrice7").innerText;
    let price7 =Number(pricestring7.slice(1,pricestring7.length));
    newPrice7 = price7 * newAmt7;
    console.log(newPrice7)

    if(newAmt7 > JSON.parse(localStorage.getItem('chuckyBrideInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('chuckyBrideInCart'))) * price7;
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice7; 
        chuckyBrideInCart = newAmt7;
        
        localStorage.setItem('chuckyBrideInCart', newAmt7);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));
        console.log("Price of products: " + JSON.parse(localStorage.getItem('chuckyBrideInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt7 < JSON.parse(localStorage.getItem('chuckyBrideInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('chuckyBrideInCart'))) * price7;
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice7;
        chuckyBrideInCart = newAmt7;
        
        localStorage.setItem('chuckyBrideInCart', newAmt7);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));
        console.log(JSON.parse(localStorage.getItem('chuckyBrideInCart')))

    } else {        
        localStorage.setItem('chuckyBrideInCart', newAmt7);
        chuckyBrideInCart = newAmt7;
        console.log(JSON.parse(localStorage.getItem('chuckyBrideInCart')))
    }

    chuckyBrideInCart = newAmt7;
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()

}


//================================================================================

//THIS IS PRODUCT 8
function changeJackAmt(event){
    event.preventDefault();


    newAmt8 = document.getElementById("jackSkellingtonSelector").value;
    jackInCart = JSON.parse(localStorage.getItem('jackInCart'))
    

    console.log("Amount: " + jackInCart);
    var pricestring8 = document.getElementById("cartPrice8").innerText;
    let price8 = Number(pricestring8.slice(1,pricestring8.length));
    newPrice8 = price8 * newAmt8;
    console.log(newPrice8)

    if(newAmt8 > JSON.parse(localStorage.getItem('jackInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('jackInCart'))) * price8
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice8; 
        jackInCart = newAmt8;
        
        localStorage.setItem('jackInCart', newAmt8);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log("Price of products: " + JSON.parse(localStorage.getItem('jackInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt8 < JSON.parse(localStorage.getItem('jackInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('jackInCart'))) * price8
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice8; 
        jackInCart = newAmt8;
        
        localStorage.setItem('jackInCart', newAmt8);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart))
        console.log(JSON.parse(localStorage.getItem('jackInCart')))

    } else {        
        localStorage.setItem('jackInCart', newAmt8);
        jackInCart = newAmt8;
        console.log(JSON.parse(localStorage.getItem('jackInCart')))
    }

    jackInCart = newAmt8;
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()
}

//================================================================================

//THIS IS PRODUCT 9
function changeBobAmt(event){
    event.preventDefault();


    newAmt9 = document.getElementById("deadpoolSelector").value;
    deadpoolInCart = JSON.parse(localStorage.getItem('deadpoolInCart'))
    
    var pricestring9 = document.getElementById("cartPrice9").innerText;
    let price9 = Number(pricestring9.slice(1,pricestring9.length));
    newPrice9 = price9 * newAmt9;
    console.log("Amount: " + deadpoolInCart);    
    
    console.log(newPrice9)

    if(newAmt9 > JSON.parse(localStorage.getItem('deadpoolInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('deadpoolInCart'))) * price9
        totalPrice = totalPrice - oldAmount;
        totalPrice = totalPrice + newPrice9;  
        deadpoolInCart = newAmt9;
        
        localStorage.setItem('deadpoolInCart', newAmt9);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));
        console.log("Price of products: " + JSON.parse(localStorage.getItem('deadpoolInCart')))
        console.log("Total quantity: " + c_Cart.totalQuantityOfProductsInCart)

    } else if(newAmt9 < JSON.parse(localStorage.getItem('deadpoolInCart'))){
        
        oldAmount = Number(JSON.parse(localStorage.getItem('deadpoolInCart'))) * price9
        totalPrice = totalPrice - oldAmount;
        totalPrice += newPrice9;
        deadpoolInCart = Number(newAmt9);

        
        localStorage.setItem('deadpoolInCart', newAmt9);
        localStorage.setItem('currentCart', JSON.stringify(c_Cart));
        console.log(JSON.parse(localStorage.getItem('deadpoolInCart')))

    } else {        
        localStorage.setItem('deadpoolInCart', newAmt9);
        deadpoolInCart = newAmt9;
        console.log(JSON.parse(localStorage.getItem('deadpoolInCart')))
    }

    deadpoolInCart = newAmt9;
    c_Cart.cartTotalPrice = totalPrice;
    totalUpdate()
}


/////////////////////////////////////////////////////////////////////////////////////////////
                        /* END OF CODE */
/////////////////////////////////////////////////////////////////////////////////////////////
