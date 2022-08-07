//FOR LOGGING IN
let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click",(event) => {
    event.preventDefault();

    let xhttp = new XMLHttpRequest();

    let username = document.getElementById("username-sign-in").value;
    let password = document.getElementById("password-sign-in").value;

    let loginInfo = {
        userName: username, 
        userPassword: password,
    }
    console.log(loginInfo);

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && xhttp.status == 200){
            console.log(xhttp.responseText);

            let data = JSON.parse(xhttp.responseText);
            console.log(data);

    localStorage.setItem('currentUser', JSON.stringify(data));

    window.location.replace("home.html")

        } else if (this.readyState == 4 && xhttp.status === 204){
            console.log(xhttp.responseText)
            console.log()
                alert("failed. status code - " + xhttp.status)
        }
    };
  
    xhttp.open("POST", `http://localhost:8080/commerce/userbyusername?userName=${username}&userPassword=${password}`);

    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

  //  xhttp.send(JSON.stringify(loginInfo)); 
})

let signUpButton = document.getElementById("signupbtn");

signUpButton.addEventListener("click", (event) => {
    event.preventDefault();

    let xhttp = new XMLHttpRequest();

    let userName = document.getElementById("username-signup").value
    let userFirstName = document.getElementById("firstName-signup").value
    let userLastName = document.getElementById("lastName-signup").value
    let address = document.getElementById("address-signup").value
    let userEmail = document.getElementById("email-signup").value
    let userPassword = document.getElementById("password-signup").value
    let balance = document.getElementById("balance-signup").value

    let signupInfo = {
        userName: userName,
        userFirstName: userFirstName,
        userLastName: userLastName,
        address: address, 
        userEmail: userEmail,
        userPassword: userPassword,
        balance: balance
    }
    console.log(signupInfo);

    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && xhttp.status === 200){
            console.log(xhttp.responseText);

            window.location.replace("home.html");

        }  else if(this.readyState == 4 && xhttp.status == 204){

            console.log(xhttp.responseText);
            alert("Failed to Make a New User: Status Code - " + xhttp.status)
        }
    };

    xhttp.open("POST",`http://localhost:8080/commerce/user`);

    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.send(JSON.stringify(signupInfo));

});