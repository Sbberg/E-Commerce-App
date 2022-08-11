//FOR LOGGING IN
var loginButton = document.getElementById("login-button");

// var userName = username;
// var userPassword = userpassword;





async function loginUser(event){
    event.preventDefault();
   
        var userName1 = document.getElementById('usernameSignIn').value;
        var userPassword1 = document.getElementById('passwordSignIn').value;
        console.log(userName1)
        console.log(userPassword1)  

        let loginBody = {
            userName:userName1,
            userPassword:userPassword1
        };
        console.log(loginBody)

        let JsonLoginBody = JSON.stringify(loginBody);
        console.log(JsonLoginBody)

    try{
        const raw_response = await fetch(`http://3.84.16.120:8080/commerce/userusername`, 
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
            },
             body:JsonLoginBody
        });

      const content = await raw_response.json();

      console.log(userName1)
      console.log(userPassword1) 
      console.log(raw_response)
      console.log(content);
      localStorage.setItem('currentUser' , JSON.stringify(content));
      window.location.replace("home.html");
    }catch(error){
      console.log(error)
    }
};


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



        }  else if(this.readyState == 4 && xhttp.status == 204){

            console.log(xhttp.responseText);
            alert("Failed to Make a New User: Status Code - " + xhttp.status)
        }
    };

    xhttp.open("POST",`http://3.84.16.120:8080/commerce/user`);

    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.send(JSON.stringify(signupInfo));


});

