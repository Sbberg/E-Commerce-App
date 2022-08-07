let signupButton = document.getElementById("sign-up-button");
submitButton.addEventListener("click", (event) => {
event.preventDefault();

    let xhttp = new XMLHttpRequest();
    let username = document.getElementById("Username-input").value;
    let firstname = document.getElementById("FirstName-input").value;
    let lastname = document.getElementById("LastName-input").value;
    let address = document.getElementById("Address-input").value;
    let email = document.getElementById("Email-input").value;
    let password = document.getElementById("Password-input").value

    let signupInfo = {
        username:Username,
        firstname:FirstName,
        lastname: LastName,
        address: Address,
        email:Email,
        password:Password,

    }
    console.log(signupInfo);


        xhttp.onreadystatechange = function(){
       if(this.readyState == 4 && xhttp.status === 200){

        window.location.replace("index.html")
        } else if(this.readyState == 4 && xhttp.status === 204) {
            console.log(xhttp.responseText)
            console.log()
                alert("Failed. Status Code: " + xhttp.status)
        }
    };

    xhttp.open("POST",`http://localhost:8080/funkopop/signup`)
    xhttp.setRequestHeader("Content-Type", "application/json");

   xhttp.send(JSON.stringify(signupInfo));
});
