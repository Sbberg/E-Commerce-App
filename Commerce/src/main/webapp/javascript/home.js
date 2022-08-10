var cart = [];
var userStorage = JSON.parse(localStorage.getItem('currentUser'));
console.log(userStorage);
var cartUser = userStorage.userId;
console.log(cartUser);
var cartAddress = userStorage.address;
console.log(cartAddress);
var totalProducts=new Number(0);
var totalPrice=new Number(0);
var nicolInCart=new Number(0);
var groguInCart = new Number(0);
var drStrangeInCart = new Number(0);
var stephenCurryInCart = new Number(0);
var starWarsInCart = new Number(0);
var elevenInCart = new Number(0);
var chuckyBrideInCart = new Number(0);
var jackInCart = new Number(0);
var deadpoolInCart = new Number(0);

localStorage.setItem('nicolInCart', JSON.stringify(0));
localStorage.setItem('groguInCart', JSON.stringify(0));
localStorage.setItem('drStrangeInCart', JSON.stringify(0));
localStorage.setItem('stephenCurryInCart', JSON.stringify(0));
localStorage.setItem('starWarsInCart', JSON.stringify(0));
localStorage.setItem('elevenInCart', JSON.stringify(0));
localStorage.setItem('chuckyBrideInCart', JSON.stringify(0));
localStorage.setItem('jackInCart', JSON.stringify(0));
localStorage.setItem('deadpoolInCart', JSON.stringify(0));

var nicolName = document.getElementById("nicolName").innerText;
localStorage.setItem('nicolName', nicolName);
console.log(localStorage.getItem('nicolName'));

var groguName = document.getElementById("groguName").innerText;
localStorage.setItem('groguName', groguName);
console.log(localStorage.getItem('groguName'));

var drStrangeName = document.getElementById("drStrangeName").innerText;
localStorage.setItem('drStrangeName', drStrangeName);
console.log(localStorage.getItem('drStrangeName'));

var stephenCurryName = document.getElementById("stephenCurryName").innerText;
localStorage.setItem('stephenCurryName', stephenCurryName);
console.log(localStorage.getItem('stephenCurryName'));

var starWarsName = document.getElementById("starWarsName").innerText;
localStorage.setItem('starWarsName', starWarsName);
console.log(localStorage.getItem('starWarsName'));

var elevenName = document.getElementById("elevenName").innerText;
localStorage.setItem('elevenName', elevenName);
console.log(localStorage.getItem('elevenName'));

var chuckyName = document.getElementById("chuckyName").innerText;
localStorage.setItem('chuckyName', chuckyName);
console.log(localStorage.getItem('chuckyName'));

var jackSkellingtonName = document.getElementById("jackSkellingtonName").innerText;
localStorage.setItem('jackSkellingtonName', jackSkellingtonName);
console.log(localStorage.getItem('jackSkellingtonName'));

var deadpoolName = document.getElementById("deadpoolName").innerText;
localStorage.setItem('deadpoolName', deadpoolName);
console.log(localStorage.getItem('deadpoolName'));


function cartProductNicol(){
    var a = new Number(document.getElementById("nicol").value);

    var pricestring1 = document.getElementById("nicolprice").innerText;
    var price1 = new Number(pricestring1.slice(1,pricestring1.length));
    var realprice1 = a * price1;

    totalProducts = totalProducts + a;
    totalPrice = totalPrice + realprice1;
    nicolInCart=a;
    localStorage.setItem('nicolInCart' , JSON.stringify(nicolInCart));
    localStorage.setItem('nicolPriceInCart', price1);
    console.log(localStorage.getItem('nicolPriceInCart'))
    console.log(JSON.stringify(nicolInCart));

    console.log(a);

    console.log(pricestring1);
    console.log(price1);
    console.log(realprice1);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductGrogu(){
    var b = new Number(document.getElementById("grogu").value);

    var pricestring2 = document.getElementById("groguprice").innerText;
    var price2 = new Number(pricestring2.slice(1,pricestring2.length));
    var realprice2 = b * price2;

    totalProducts = totalProducts + b;
    totalPrice = totalPrice + realprice2;
    groguInCart = b;
    localStorage.setItem('groguInCart' , JSON.stringify(groguInCart));
    localStorage.setItem('groguPriceInCart', price2);
    console.log(localStorage.getItem('groguPriceInCart'))

    console.log(b);

    console.log(pricestring2);
    console.log(price2);
    console.log(realprice2);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductDrStrange(){
    var c = new Number(document.getElementById("drstrange").value);

    var pricestring3 = document.getElementById("drstrangeprice").innerText;
    var price3 = new Number(pricestring3.slice(1,pricestring3.length));
    var realprice3 = c * price3;

    totalProducts = totalProducts + c;
    totalPrice = totalPrice + realprice3;
    drStrangeInCart = c;
    localStorage.setItem('drStrangeInCart' , JSON.stringify(drStrangeInCart));
    localStorage.setItem('drStrangePriceInCart', price3);
    console.log(localStorage.getItem('drStrangePriceInCart'))

    console.log(c);
    console.log(pricestring3);
    console.log(price3);
    console.log(realprice3);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductStephenCurry(){
    var d = new Number(document.getElementById("Stephen Curry").value);

    var pricestring4 = document.getElementById("stephencurryprice").innerText;
    var price4 = new Number(pricestring4.slice(1,pricestring4.length));
    var realprice4 = d * price4;

    totalProducts = totalProducts + d;
    totalPrice = totalPrice + realprice4;
    stephenCurryInCart = d;
    localStorage.setItem('stephenCurryInCart' , JSON.stringify(stephenCurryInCart));
    localStorage.setItem('stephenCurryPriceInCart', price4);
    console.log(localStorage.getItem('stephenCurryPriceInCart'))
    

    console.log(d);
    console.log(pricestring4);
    console.log(price4);
    console.log(realprice4);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductStarWars(){
    var e = new Number(document.getElementById("star wars").value);

    var pricestring5 = document.getElementById("starwarsprice").innerText;
    var price5 = new Number(pricestring5.slice(1,pricestring5.length));
    var realprice5 = e * price5;

    totalProducts = totalProducts + e;
    totalPrice = totalPrice + realprice5;
    starWarsInCart = e;
    localStorage.setItem('starWarsInCart' , JSON.stringify(starWarsInCart));
    localStorage.setItem('starWarsPriceInCart', price5);
    console.log(localStorage.getItem('starWarsPriceInCart'))

    console.log(e);
    console.log(pricestring5);
    console.log(price5);
    console.log(realprice5);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductEleven(){
    var f = new Number(document.getElementById("Eleven").value);

    var pricestring6 = document.getElementById("elevenprice").innerText;
    var price6 = new Number(pricestring6.slice(1,pricestring6.length));
    var realprice6 = f * price6;

    totalProducts = totalProducts + f;
    totalPrice = totalPrice + realprice6;
    elevenInCart = f;
    localStorage.setItem('elevenInCart' , JSON.stringify(elevenInCart));
    localStorage.setItem('elevenPriceInCart', price6);
    console.log(localStorage.getItem('elevenPriceInCart'))

    console.log(f);
    console.log(pricestring6);
    console.log(price6);
    console.log(realprice6);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductChucky(){
    var g = new Number(document.getElementById("chucky").value);

    var pricestring7 = document.getElementById("chuckyprice").innerText;
    var price7 = new Number(pricestring7.slice(1,pricestring7.length));
    var realprice7 = g * price7;


    totalProducts = totalProducts + g;
    totalPrice = totalPrice + realprice7;
    chuckyBrideInCart = g;
    localStorage.setItem('chuckyBrideInCart' , JSON.stringify(chuckyBrideInCart));
    localStorage.setItem('chuckyBridePriceInCart', price7);
    console.log(localStorage.getItem('chuckyBridePriceInCart'))

    console.log(g);
    console.log(pricestring7);
    console.log(price7);
    console.log(realprice7);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductJackSkellington(){
    var h = new Number(document.getElementById("Jack Skellington").value);

    var pricestring8 = document.getElementById("jackprice").innerText;
    var price8 = new Number(pricestring8.slice(1,pricestring8.length));
    var realprice8 = h * price8;

    totalProducts = totalProducts + h;
    totalPrice = totalPrice + realprice8;
    jackInCart = h;
    localStorage.setItem('jackInCart' , JSON.stringify(jackInCart));
    localStorage.setItem('jackPriceInCart', price8);
    console.log(localStorage.getItem('jackPriceInCart'))

    console.log(h);
    console.log(pricestring8);
    console.log(price8);
    console.log(realprice8);

    console.log(totalPrice);
    console.log(totalProducts);
}

function cartProductDeadpool(){
    var i = new Number(document.getElementById("Deadpool").value);

    var pricestring9 = document.getElementById("deadpoolprice").innerText;
    var price9 = new Number(pricestring9.slice(1,pricestring9.length));
    var realprice9 = i* price9;


    totalProducts = totalProducts + i;
    totalPrice = totalPrice + realprice9;
    deadpoolInCart = i;
    localStorage.setItem('deadpoolInCart' , JSON.stringify(deadpoolInCart));
    localStorage.setItem('deadpoolPriceInCart', price9);
    console.log(localStorage.getItem('deadpoolPriceInCart'))

    console.log(i);
    console.log(pricestring9);
    console.log(price9);
    console.log(realprice9);

    console.log(totalPrice);
    console.log(totalProducts);
}



console.log(totalPrice);
console.log(totalProducts);


async function createCart(event){
    event.preventDefault();

    let cartInfo = {
        cartTotalPrice:totalPrice,
        totalQuantityOfProductsInCart:totalProducts,
        cartAddress:userStorage.address,
        cartUser:userStorage.userId
    };
    
    let jsonCartInfo = JSON.stringify(cartInfo);

    console.log(cartInfo);
    console.log(jsonCartInfo);

    try{
        const raw_response = await fetch(`http://localhost:8080/commerce/cart`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*", 
            },
            body:jsonCartInfo
        });

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const data = await raw_response.json();

        console.log(data);
        console.log(JSON.stringify(data));

        localStorage.setItem('currentCart',jsonCartInfo);
        window.location.replace("cart.html");

    }catch(error){
        console.log(error)
    }
};


