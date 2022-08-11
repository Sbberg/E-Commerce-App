//--------------------------------------------------------
//GRABBING NECESSARY USER AND CART DATA
//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(userStorage);


//Finds user's cart and price and logs it
let cartStorage = localStorage.getItem('currentCart');
let cart = JSON.parse(cartStorage);

subtotal = document.getElementById("subtotal")
subtotal.innerText = `$${cart.cartTotalPrice.toFixed(2)}`
products = document.getElementById("products")
products.innerText =`${cart.totalQuantityOfProductsInCart}`
balancetext = document.getElementById("after-balance")
var realbalancetext = user.balance - cart.cartTotalPrice;
balancetext.innerText =`$${user.balance.toFixed(2)} - $${cart.cartTotalPrice.toFixed(2)} = $${realbalancetext.toFixed(2)}`

//User Fields
var userid = user.userId;
var username = user.userName;
var userFirstName = user.userFirstName;
var userLastName = user.userLastName;
var userAddress = user.address;
var userEmail = user.userEmail;
var userPassword = user.userPassword;
var userOldBalance = user.balance;
var userNewBalance = userOldBalance - cart.cartTotalPrice;



console.group("USER")
console.log(user)
console.log(user.userId);
console.log(user.userName);
console.log(user.userFirstName);
console.log(user.userLastName);
console.log(user.address);
console.log(user.userEmail);
console.log(user.userPassword);
console.log(user.balance);
console.log(userNewBalance);
console.groupEnd("USER");



console.group("CART")
console.log(cart);
console.log(cart.cartTotalPrice);
console.log(cart.totalQuantityOfProductsInCart);
console.log(cart.cartAddress);
console.log(cart.cartUser);
console.groupEnd("CART")
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------



//PULLING PRODUCTS



//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
getAllProducts(); //To run on page load
async function getAllProducts(){
    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/products`,
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
        localStorage.setItem('allProducts',JSON.stringify(data));
    
    }catch(error){
        console.log(error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//GRABBING AND SETTING INDIVIDUAL PRODUCTS

//All Products Array
const allProducts = JSON.parse(localStorage.getItem('allProducts'));
console.log(allProducts)


//ITERATING THROUGH allProducts Array and assigning Individual Products
//to element in allProducts Array

allProducts.forEach(element => {

    if(element.productId == 8){
        nicolBolasProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 10){
        stephenCurryProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 17){
        starWarsProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 7){
        drStrangeProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 1){
        groguProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 12){
        jackSkellingtonProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 16){
        elevenProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 13){
        deadpoolProduct = allProducts[allProducts.indexOf(element)];
    }

    if(element.productId == 15){
        chuckyProduct = allProducts[allProducts.indexOf(element)];
    } 

});


//Nicol Bolas Product Array and Inventory
var nicolBolasProduct;
var nicolBolasId = 8;
var nicolBolasOldInventory = nicolBolasProduct.inventory;
var nicolPurchased = JSON.parse(localStorage.getItem('nicolInCart'));
var newNicolInventoryAmt = nicolBolasOldInventory - nicolPurchased;
console.group("Nicol Bolas Data");
console.log(nicolBolasProduct);
console.log(nicolBolasId)
console.log(nicolBolasOldInventory);
console.log(localStorage.getItem('nicolInCart'))
console.log(newNicolInventoryAmt);
console.groupEnd("Nicol Bolas Data");

//----------------------------------------------------------------------------------------------------------------



//Stephen Curry Product Array and Inventory
var stephenCurryProduct;
var stephenCurryId = 10
var stephenCurryOldInventory = stephenCurryProduct.inventory;
var stephenCurryPurchased =JSON.parse(localStorage.getItem('stephenCurryInCart'));
var newStephenCurryInventoryAmt = stephenCurryOldInventory - stephenCurryPurchased;
console.group("Stephen Curry Data");
console.log(stephenCurryProduct);
console.log(stephenCurryId)
console.log(stephenCurryOldInventory);
console.log(stephenCurryPurchased);
console.log(newStephenCurryInventoryAmt);
console.groupEnd("Stephen Curry Data");

//----------------------------------------------------------------------------------------------------------------

//Star Wars Bad Batch Array and Inventory

var starWarsProduct;
var starWarsId = 17
var starWarsOldInventory = starWarsProduct.inventory;
var starWarsPurchased = JSON.parse(localStorage.getItem('starWarsInCart'));
var newStarWarsInventoryAmt = starWarsOldInventory - starWarsPurchased;
console.group("Bad Batch Data");
console.log(starWarsProduct);
console.log(starWarsId);
console.log(starWarsOldInventory);
console.log(starWarsPurchased);
console.log(newStarWarsInventoryAmt);
console.groupEnd("Bad Batch Data");

//----------------------------------------------------------------------------------------------------------------

//Eleven Array and Inventory
var elevenProduct;
var elevenId = 16;
var elevenOldInventory = elevenProduct.inventory;
var elevenPurchased = JSON.parse(localStorage.getItem('elevenInCart'));
var newElevenInventoryAmt = elevenOldInventory - elevenPurchased;
console.group("Eleven Data");
console.log(elevenProduct);
console.log(elevenId);
console.log(elevenOldInventory);
console.log(elevenPurchased);
console.log(newElevenInventoryAmt);
console.groupEnd("Eleven Data");

//----------------------------------------------------------------------------------------------------------------

//Jack Skellington Array and Inventory
var jackSkellingtonProduct;
var jackSkellingtonId = 12;
var jackSkellingtonOldInventory = jackSkellingtonProduct.inventory;
var jackSkellingtonPurchased = JSON.parse(localStorage.getItem('jackInCart'));
var newJackSkellingtonInventoryAmt = jackSkellingtonOldInventory - jackSkellingtonPurchased;
console.group("Jack Skellington Data");
console.log(jackSkellingtonProduct);
console.log(jackSkellingtonId);
console.log(jackSkellingtonOldInventory);
console.log(jackSkellingtonPurchased);
console.log(newJackSkellingtonInventoryAmt);
console.groupEnd("Jack Skellington Data");


//----------------------------------------------------------------------------------------------------------------


//Deadpool Array and Inventory
var deadpoolProduct;
var deadpoolId = 13;
var deadpoolOldInventory = deadpoolProduct.inventory;
var deadpoolPurchased = JSON.parse(localStorage.getItem('deadpoolInCart'));
var newDeadpoolInventoryAmt = deadpoolOldInventory - deadpoolPurchased;
console.group("Deadpool Data");
console.log(deadpoolProduct);
console.log(deadpoolId);
console.log(deadpoolOldInventory);
console.log(deadpoolPurchased);
console.log(newDeadpoolInventoryAmt);
console.groupEnd("Deadpool Data");


//----------------------------------------------------------------------------------------------------------------


//Dr. Strange Array and Inventory
var drStrangeProduct;
var drStrangeId = 7;
var drStrangeOldInventory = drStrangeProduct.inventory;
var drStrangePurchased = JSON.parse(localStorage.getItem('drStrangeInCart'));
var newDrStrangeInventoryAmt = drStrangeOldInventory - drStrangePurchased;
console.group("Dr. Strange");
console.log(drStrangeProduct);
console.log(drStrangeId);
console.log(drStrangeOldInventory);
console.log(drStrangePurchased);
console.log(newDrStrangeInventoryAmt);
console.groupEnd("Dr. Strange");

//----------------------------------------------------------------------------------------------------------------

//Grogu Array and Inventory
var groguProduct;
var groguId = 1;
var groguOldInventory = groguProduct.inventory;
var groguPurchased = JSON.parse(localStorage.getItem('groguInCart'));
var newGroguInventoryAmt = groguOldInventory - groguPurchased;
console.group("Grogu Data");
console.log(groguProduct);
console.log(groguId);
console.log(groguOldInventory);
console.log(groguPurchased);
console.log(newGroguInventoryAmt);
console.groupEnd("Grogu Data");

//----------------------------------------------------------------------------------------------------------------

//Chucky Array and Inventory
var chuckyProduct;
var chuckyId = 15;
var chuckyOldInventory = chuckyProduct.inventory;
var chuckyPurchased = JSON.parse(localStorage.getItem('chuckyBrideInCart'));
var newChuckyInventoryAmt = chuckyOldInventory - chuckyPurchased;
console.group("Chucky Data");
console.log(chuckyProduct);
console.log(chuckyId);
console.log(chuckyOldInventory);
console.log(chuckyPurchased);
console.log(newChuckyInventoryAmt);
console.groupEnd("Grogu Data");

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//USER UPDATE METHOD

//TESTED AND WORKS JUST NEED TO TIE IT TO A BUTTON
//TESTED AND WORKS JUST NEED TO TIE IT TO A BUTTON
//TESTED AND WORKS JUST NEED TO TIE IT TO A BUTTON

//SETTING NEW USER BALANCE/DATA FOR UPDATE


//UPDATE USER
async function updateUserBalance(event){
    event.preventDefault();

    let updateInfo = {
        userName:username,
        userFirstName:userFirstName,
        userLastName:userLastName,
        address:userAddress,
        userEmail:userEmail,
        userPassword:userPassword,
        balance:userNewBalance,
        userId:userid
    };
    

    let jsonUpdateInfo = JSON.stringify(updateInfo);

    console.group("JSON User Data sent to Server");
    console.log(updateInfo);
    console.log(jsonUpdateInfo);
    console.groupEnd("JSON User Data sent to Server");

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/userupdate`,
        {                //Put method to update data
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonUpdateInfo
    });
    
    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")

    const data = await raw_response.json();

    console.log("data: " + data);

    console.log("USER "+user);
    console.log("LOCALSTORE "+localStorage.getItem('currentUser'))


    } catch (error) {
        alert("There is an error: " + error)
    }

};

//TESTED AND WORKS JUST NEED TO TIE IT TO A BUTTON
//TESTED AND WORKS JUST NEED TO TIE IT TO A BUTTON
//TESTED AND WORKS JUST NEED TO TIE IT TO A BUTTON

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//INVENTORY UPDATE METHODS

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATE METHOD TESTED AND WORKS. JUST NEED TO TIE TO BUTTON
//UPDATE METHOD TESTED AND WORKS. JUST NEED TO TIE TO BUTTON
//UPDATE METHOD TESTED AND WORKS. JUST NEED TO TIE TO BUTTON


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATING NICOL BOLAS INVENTORY



async function updateNicolBolas(event){
    event.preventDefault();

    let nicolBolasUpdateInfo = {
        productName:"Nicol Bolas",
        price:19.99,
        productCategory:"Magic The Gathering",
        inventory:newNicolInventoryAmt,
        productId:nicolBolasId
    };
    
    let jsonNicolBolasUpdateInfo = JSON.stringify(nicolBolasUpdateInfo);
    
    console.group("Nicol Bolas Data Sent to Server")
    console.log(nicolBolasUpdateInfo);
    console.log(jsonNicolBolasUpdateInfo);
    console.groupEnd("Nicol Bolas Data Sent to Server")


    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonNicolBolasUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//UPDATE METHOD TESTED AND WORKS. JUST NEED TO TIE TO BUTTON
//UPDATE METHOD TESTED AND WORKS. JUST NEED TO TIE TO BUTTON
//UPDATE METHOD TESTED AND WORKS. JUST NEED TO TIE TO BUTTON




//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//UPDATING STEPHEN CURRY INVENTORY

async function updateStephenCurry(event){
    event.preventDefault();

    let stephenCurryUpdateInfo = {
        productName:"Stephen Curry",
        price:19.99,
        productCategory:"NBA",
        inventory:newStephenCurryInventoryAmt,
        productId:stephenCurryId
    };
    
    let jsonStephenCurryUpdateInfo = JSON.stringify(stephenCurryUpdateInfo);
    
    console.group("Stephen Curry Data Sent to Server")
    console.log(stephenCurryUpdateInfo);
    console.log(jsonStephenCurryUpdateInfo);
    console.groupEnd("Stephen Curry Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonStephenCurryUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATING STAR WARS INVENTORY

async function updateBadBatch(event){
    event.preventDefault();

    let badBatchUpdateInfo = {
        productName:"Bad Batch",
        price:9.99,
        productCategory:"Star Wars",
        inventory:newStarWarsInventoryAmt,
        productId:starWarsId
    };
    
    let jsonBadBatchUpdateInfo = JSON.stringify(badBatchUpdateInfo);
    
    console.group("Bad Batch Data Sent to Server")
    console.log(badBatchUpdateInfo);
    console.log(jsonBadBatchUpdateInfo);
    console.groupEnd("Bad Batch Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonBadBatchUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")

    const data = await raw_response.json();

    console.log("data: " + data);

    }catch (error){
        alert("There is an error: "+error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATING ELEVEN


async function updateEleven(event){
    event.preventDefault();

    let elevenUpdateInfo = {
        productName:"Eleven",
        price:24.99,
        productCategory:"Stranger Things",
        inventory:newElevenInventoryAmt,
        productId:elevenId
    };
    
    let jsonElevenUpdateInfo = JSON.stringify(elevenUpdateInfo);
    
    console.group("Eleven Data Sent to Server")
    console.log(elevenUpdateInfo);
    console.log(jsonElevenUpdateInfo);
    console.groupEnd("Eleven Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonElevenUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};



//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATE JACK SKELLINGTON

async function updateJackSkellington(event){
    event.preventDefault();

    let jackSkellingtonUpdateInfo = {
        productName:"Jack Skellington",
        price:9.99,
        productCategory:"The Nightmare Before Christmas",
        inventory:newJackSkellingtonInventoryAmt,
        productId:jackSkellingtonId
    };
    
    let jsonJackSkellingtonUpdateInfo = JSON.stringify(jackSkellingtonUpdateInfo);
    
    console.group("Jack Skellington Data Sent to Server")
    console.log(jackSkellingtonUpdateInfo);
    console.log(jsonJackSkellingtonUpdateInfo);
    console.groupEnd("Jack Skellington Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonJackSkellingtonUpdateInfo
    }); 

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATE DEADPOOL INVENTORY


async function updateDeadpool(event){
    event.preventDefault();

    let deadpoolUpdateInfo = {
        productName:"Deadpool Playtime - Bob Ross",
        price:24.99,
        productCategory:"Marvel",
        inventory:newDeadpoolInventoryAmt,
        productId:deadpoolId
    };
    
    let jsonDeadpoolUpdateInfo = JSON.stringify(deadpoolUpdateInfo);
    
    console.group("Deadpool Data Sent to Server")
    console.log(deadpoolUpdateInfo);
    console.log(jsonDeadpoolUpdateInfo);
    console.groupEnd("Deadpool Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonDeadpoolUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATE DR STRANGE

async function updateDrStrange(event){
    event.preventDefault();

    let drStrangeUpdateInfo = {
        productName:"Dr Strange",
        price:19.99,
        productCategory:"Magic The Gathering",
        inventory:newDrStrangeInventoryAmt,
        productId:drStrangeId
    };
    
    let jsonDrStrangeUpdateInfo = JSON.stringify(drStrangeUpdateInfo);
    
    console.group("Dr. Strange Data Sent to Server")
    console.log(drStrangeUpdateInfo);
    console.log(jsonDrStrangeUpdateInfo);
    console.groupEnd("Dr. Strange Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonDrStrangeUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATE GROGU

async function updateGrogu(event){
    event.preventDefault();

    let groguUpdateInfo = {
        productName:"Grogu",
        price:9.99,
        productCategory:"Star Wars",
        inventory:newGroguInventoryAmt,
        productId:groguId
    };
    
    let jsonGroguUpdateInfo = JSON.stringify(groguUpdateInfo);
    
    console.group("Grogu Data Sent to Server")
    console.log(groguUpdateInfo);
    console.log(jsonGroguUpdateInfo);
    console.groupEnd("Grogu Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonGroguUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};

//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

//UPDATE CHUCKY

async function updateChucky(event){
    event.preventDefault();

    let chuckyUpdateInfo = {
        productName:"Bride of Chucky",
        price:19.99,
        productCategory:"Chucky",
        inventory:newChuckyInventoryAmt,
        productId:chuckyId
    };
    
    let jsonChuckyUpdateInfo = JSON.stringify(chuckyUpdateInfo);
    
    console.group("Chucky Data Sent to Server")
    console.log(chuckyUpdateInfo);
    console.log(jsonChuckyUpdateInfo);
    console.groupEnd("Chucky Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonChuckyUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------


//UPDATING CART

console.group("CART")
console.log(cart);
console.log(cart.cartTotalPrice);
console.log(cart.totalQuantityOfProductsInCart);
console.log(cart.cartAddress);
console.log(cart.cartUser);
console.groupEnd("CART")

async function updateCart(event){
    event.preventDefault();

    let cartUpdateInfo = {
        cartTotalPrice:cart.cartTotalPrice,
        totalQuantityOfProductsInCart:cart.totalQuantityOfProductsInCart,
        cartAddress:cart.cartAddress,
        cartUser:cart.cartUser
    };

    let jsonCartUpdateInfo = JSON.stringify(cartUpdateInfo);

    console.group("Cart Data Sent to Server")
    console.log(cartUpdateInfo);
    console.log(jsonCartUpdateInfo);
    console.groupEnd("Cart Data Sent to Server")

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/productinventory`,
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
        },
        body:jsonCartUpdateInfo
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    console.log("Request was completed")   

    const data = await raw_response.json();

    console.log("data: " + data);
    
    }catch (error){
        alert("There is an error: "+error)
    }
};


//----------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------

function megaUpdatefunction(event){
    event.preventDefault();

    //Product Put
    updateNicolBolas(event);
    updateStephenCurry(event);
    updateBadBatch(event);
    updateEleven(event);
    updateJackSkellington(event);
    updateDeadpool(event);
    updateDrStrange(event);
    updateGrogu(event);
    updateChucky(event);

    //Cart Put
    updateCart(event);
}

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
