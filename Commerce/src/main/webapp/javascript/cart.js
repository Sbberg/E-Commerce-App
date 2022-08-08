
let button1 = document.getElementById("nicol");


//THESE NEED TO BE DEFINED FOR THE CART
// let cartProduct1 = document.getElementById("cartProduct1").value;
// console.log(cartProduct1)
// let cartPrice1 = document.getElementById("cartPrice1").value;
// console.log(cartPrice1)

//THIS NEED PARENT REFERENCE
// let cartProduct1Display = document.getElementById("cartProduct1");
// cartProduct1Display.innerHTML = `${product.p_name}`;
// let cartPrice1Display = document.getElementById("cartPrice1");
// cartPrice1Display.innerHTML = `${p_price}`;

//this event auto activates. (or at least did as a console log.)
button1.onclick = addToCart();

//needs to create cart for current user THEN add to cart
//if (whatever != null)
async function addToCart(){
    console.log()
    try {
        //this is currently a get method cause that is the default
        const raw_response = await fetch (`http://localhost:8080/commerce/products`
        //THIS CODE CAN BE USED TO CHANGE THE DEFAULT, INFO ISN'T CORRECT LIKE USER/CART ID
        //,{
    //     method: "POST",
    //     Headers:{
    //         "Content-Type":"application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "userId": cart.cartId
    //     }
    // }
    );
        

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }
        
        console.log("Request complete")

        const json_data = await raw_response.json();
        
        //these will need to reference a parent class/local storage like the user i think
        //look at profile/homepage.js for reference.
        cartProduct1.innerHTML = `${p_name}`;
        cartPrice1.innerHTML = `${p_price}`;
    } catch (error) {
        alert("Item not added" + error)
    }
};