
//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(userStorage);


//Finds user's cart and price and logs it
let cartStorage = localStorage.getItem('currentCart');
let cart = JSON.parse(cartStorage);


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

//PULLING PRODUCTS
getAllProducts(); //To open on page load
async function getAllProducts(){
    try{
        const raw_response = await fetch(`http://localhost:8080/commerce/products`,
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

//All Products Array
var allProducts = JSON.parse(localStorage.getItem('allProducts'));
console.log(allProducts)

//Nicol Bolas Product Array and Inventory
var nicolBolasProduct = allProducts[0];
var nicolBolasOldInventory = nicolBolasProduct.inventory;
var nicolPurchased = localStorage.getItem('nicolInCart');
var newNicolInventoryAmt = nicolBolasOldInventory - nicolPurchased;

//Stephen Curry Product Array and Inventory
var stephenCurryProduct = allProducts[1];
var stephenCurryOldInventory = stephenCurryProduct.inventory;
var stephenCurryPurchased = localStorage.getItem('stephenCurryInCart');
var newStephenCurryInventoryAmt = stephenCurryOldInventory - stephenCurryPurchased;

//Star Wars Bad Batch Array and Inventory
var starWarsProduct = allProducts[2];
var starWarsOldInventory = starWarsProduct.inventory;
var starWarsPurchased = localStorage.getItem('starWarsInCart');
var newStarWarsInventoryAmt = starWarsOldInventory - starWarsPurchased;


//Eleven Array and Inventory
var elevenProduct = allProducts[3];
var elevenOldInventory = elevenProduct.inventory;
var elevenPurchased = localStorage.getItem('elevenInCart');
var newElevenInventoryAmt = elevenOldInventory - elevenPurchased;

//Jack Skellington Array and Inventory
var jackSkellingtonProduct = allProducts[4]
var jackSkellingtonOldInventory = jackSkellingtonProduct.inventory;
var jackSkellingtonPurchased = localStorage.getItem('jackInCart');
var newJackSkellingtonInventoryAmt = jackSkellingtonOldInventory - jackSkellingtonPurchased;

//Deadpool Array and Inventory
var deadpoolProduct = allProducts[5]
var deadpoolOldInventory = deadpoolProduct.inventory;
var deadpoolPurchased = localStorage.getItem('deadpoolInCart');
var newDeadpoolInventoryAmt = deadpoolOldInventory - deadpoolPurchased;

//Dr. Strange Array and Inventory
var drStrangeProduct = allProducts[6]
var drStrangeOldInventory = drStrangeProduct.inventory;
var drStrangePurchased = localStorage.getItem('drStrangeInCart');
var newDrStrangeInventoryAmt = drStrangeOldInventory - drStrangePurchased;

//Grogu Array and Inventory
var groguProduct = allProducts[7]
var groguOldInventory = groguProduct.inventory;
var groguPurchased = localStorage.getItem('groguInCart');
var newGroguInventoryAmt = groguOldInventory - groguPurchased;

//Chucky Array and Inventory
var chuckyProduct = allProducts[9]
var chuckyOldInventory = chuckyProduct.inventory;
var chuckyPurchased = localStorage.getItem('chuckyBrideInCart');
var newChuckyInventoryAmt = chuckyOldInventory - chuckyPurchased;


//PUTTING NEW USER BALANCE
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

async function updateUserBalance(event){
    event.preventDefault();
}





//THIS WAS A TEST TO SEE ABOUT INTERPOLATING HTML CODE
//var FirstNameDisplay =`<input type="text" name="fname" placeholder=${user.userFirstName} id="fName"/>`

//THIS DOES NOT WORK RIGHT NOW
//these were used to TRY TO auto add user info into input fields
// FirstName = document.getElementById("fName").value;
// FirstNameDisplay = document.getElementById("fName");
// document.getElementById("fName").innerHTML = `${user.userFirstName}`
// FirstNameDisplay.innerHtml =`${user.userFirstName}`
// LastName = document.getElementById("lName").value;
// emailInput = document.getElementById("emailInput").value;
// emailInput.innerText = `${user.emailInput}`
// addressInput = document.getElementById("addressInput").value;

//gets subtotal and displays it in html
//subtotal = document.getElementById("subtotal");
// subtotalDisplay = document.getElementById("subtotal");
// console.log(subtotalDisplay);


//THIS STILL NEEDS AN ID IN THE HTML TO DISPLAY
// totalAfter = document.getElementById("total")
// totalAfter.innerText = (user.balance - cart.cartTotalPrice);


//THIS NEEDS TO BE CHANGED TO CART TOTAL
// subtotalDisplay.innerText = `$${cart.cartTotalPrice}`;

// let balance = user.balance;

// async function purchase(event){
//     event.preventDefault();
//     console.group("Purchase")

    
//     let balanceBody = {
//         userId:userId,
//         balance:balance
//     };
//     let JsonBalance = JSON.stringify(balanceBody);
//     console.log(balanceBody)
//     console.log(JsonBalance)
    

// try{
//     const raw_response = await fetch(`http://localhost:8080/commerce/`, 
//         {
//             method:"PUT",
//             headers:{
//                 "Content-Type":"application/json",
//                 "Access-Control-Allow-Origin": "*"
//         },
//          body:JsonBalance
//     });



    
//     const content = await raw_response.json();

//       console.log("Balance: " + user.balance);
//       console.log("RESPONSE: " + raw_response);
//       console.log("Content :" + content);

//       localStorage.setItem('currentUser' , JSON.stringify(content));

      
//     }catch(error){
//       console.log("ERROR: " + error)
//     }
//     console.groupEnd("Purchase")
// }


// async function purchase(){

//     console.group("Item Removal")


//     let cartTotalPrice = cart.cartTotalPrice;

    
//     let cartbody = {
//         cartId:cartId,
//         cartTotalPrice:cart.cartTotalPrice,
//         totalQuantityOfProductsInCart:cart.totalQuantityOfProductsInCart
//     };
//     let JsonCart = JSON.stringify(balanceBody);
//     console.log(cartBody)
//     console.log(JsonCart)
    

// try{
//     const raw_response = await fetch(`http://localhost:8080/commerce/`, 
//         {
//             method:"PUT",
//             headers:{
//                 "Content-Type":"application/json",
//                 "Access-Control-Allow-Origin": "*"
//         },
//          body:JsonCart
//     });



    
//     const content = await raw_response.json();

//       console.log("Cart Price: " + cart.cartTotalPrice);
//       console.log("Cart Quantity: " + cart.totalQuantityOfProductsInCart);
//       console.log("Cart Address: " + cart.cartAddress);
//       console.log("Cart User: " + cart.cartUser);
//       console.log("Cart RESPONSE: " + raw_response);
//       console.log("Cart Content :" + content);

//       localStorage.setItem('currentUser' , JSON.stringify(content));

      
//     }catch(error){
//       console.log("ERROR: " + error)
//     }
//     console.groupEnd("Item Removal")
// }

