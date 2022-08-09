//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(userStorage);

console.group("USER")
console.log(user)
console.log(user.userId);
console.log(user.userName);
console.groupEnd("USER");

//Finds user's cart and price and logs it
let cartStorage = localStorage.getItem('currentCart');
let cart =JSON.parse(cartStorage);

console.group("CART")
console.log(cart);
console.log(cart.cartTotalPrice);
console.log(cart.totalQuantityOfProductsInCart);
console.log(cart.cartAddress);
console.log(cart.cartUser);
console.groupEnd("CART")

//THIS WAS A TEST TO SEE ABOUT INTERPOLATING HTML CODE
//var FirstNameDisplay =`<input type="text" name="fname" placeholder=${user.userFirstName} id="fName"/>`

//THIS DOES NOT WORK RIGHT NOW
//these were used to TRY TO auto add user info into input fields
FirstName = document.getElementById("fName").value;
FirstNameDisplay = document.getElementById("fName");
document.getElementById("fName").innerHTML = `${user.userFirstName}`
FirstNameDisplay.innerHtml =`${user.userFirstName}`
LastName = document.getElementById("lName").value;
emailInput = document.getElementById("emailInput").value;
emailInput.innerText = `${user.emailInput}`
addressInput = document.getElementById("addressInput").value;

//gets subtotal and displays it in html
//subtotal = document.getElementById("subtotal");
subtotalDisplay = document.getElementById("subtotal");
console.log(subtotalDisplay);


//THIS STILL NEEDS AN ID IN THE HTML TO DISPLAY
totalAfter = document.getElementById("total")
totalAfter.innerText = (user.balance - cart.cartTotalPrice);


//THIS NEEDS TO BE CHANGED TO CART TOTAL
subtotalDisplay.innerText = `$${cart.cartTotalPrice}`;

let balance = user.balance;

async function purchase(event){
    event.preventDefault();
    console.group("Purchase")

    
    let balanceBody = {
        userId:userId,
        balance:balance
    };
    let JsonBalance = JSON.stringify(balanceBody);
    console.log(balanceBody)
    console.log(JsonBalance)
    

try{
    const raw_response = await fetch(`http://localhost:8080/commerce/`, 
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*"
        },
         body:JsonBalance
    });



    
    const content = await raw_response.json();

      console.log("Balance: " + user.balance);
      console.log("RESPONSE: " + raw_response);
      console.log("Content :" + content);

      localStorage.setItem('currentUser' , JSON.stringify(content));

      
    }catch(error){
      console.log("ERROR: " + error)
    }
    console.groupEnd("Purchase")
}


async function purchase(){

    console.group("Item Removal")


    let cartTotalPrice = cart.cartTotalPrice;

    
    let cartbody = {
        cartId:cartId,
        cartTotalPrice:cart.cartTotalPrice,
        totalQuantityOfProductsInCart:cart.totalQuantityOfProductsInCart
    };
    let JsonCart = JSON.stringify(balanceBody);
    console.log(cartBody)
    console.log(JsonCart)
    

try{
    const raw_response = await fetch(`http://localhost:8080/commerce/`, 
        {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*"
        },
         body:JsonCart
    });



    
    const content = await raw_response.json();

      console.log("Cart Price: " + cart.cartTotalPrice);
      console.log("Cart Quantity: " + cart.totalQuantityOfProductsInCart);
      console.log("Cart Address: " + cart.cartAddress);
      console.log("Cart User: " + cart.cartUser);
      console.log("Cart RESPONSE: " + raw_response);
      console.log("Cart Content :" + content);

      localStorage.setItem('currentUser' , JSON.stringify(content));

      
    }catch(error){
      console.log("ERROR: " + error)
    }
    console.groupEnd("Item Removal")
}

