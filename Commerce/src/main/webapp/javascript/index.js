//FOR LOGGING IN
var loginButton = document.getElementById("login-button");
// var username = document.getElementById("username-sign-in").innerText;
// var userpassword = document.getElementById("password-sign-in").innerText;
// var userName = username;
// console.log(userName)
// var userPassword = userpassword;
// console.log(userPassword)

// let userjsondata = {
//     "userName":username,
//     "userPassword":userpassword
// } 

// const requestOptions = {
//     method: 'POST',
//     // mode: 'no-cors',
//     headers: {'Content-Type':'application/json'},
//     body: JSON.stringify(userjsondata)
// }

loginButton.addEventListener("click", async () => {
    try{
        const raw_response = await fetch(`http://localhost:8080/commerce/users`);

        
        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        const json_data = await raw_response.json();

        console.log(json_data)

        localStorage.setItem('currentUser' , JSON.stringify(json_data));
        

        window.location.replace("home.html");
    } catch(error){
        console.log(error);
    }
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

// loginButton.addEventListener("click", async () => {
//     try{
//         const raw_response = await fetch(`http://localhost:8080/commerce/users`);

        
//         if(!raw_response.ok){
//             throw new Error(raw_response.status)
//         }

//         const json_data = await raw_response.json();

//         console.log(json_data)

//         localStorage.setItem('currentUser' , JSON.stringify(json_data));
        

//         window.location.replace("home.html");
//     } catch(error){
//         console.log(error);
//     }
// })
