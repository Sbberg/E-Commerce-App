//FOR LOGGING IN
let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click",(event) => {
    event.preventDefault();

    let xhttp = new XMLHttpRequest();

    let username = document.getElementById("username-sign-in").value;
    let password = document.getElementById("password-sign-in").value;

    let loginInfo = {
        username: username, 
        password: password,
    }
    console.log(loginInfo);

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && xhttp.status == 200){
            console.log(xhttp.responseText);

            let data = JSON.parse(xhttp.responseText);
            console.log(data);

    localStorage.setItem('currentUser', JSON.stringify(data));

    window.location.replace("index.html")

        } else if (this.readyState == 4 && xhttp.status === 204){
            console.log(xhttp.responseText)
            console.log()
                alert("failed. status code - " + xhttp.status)
        }
    };
  
    //NEED LOCAL HOST URL
    //xhttp.open("POST", `http://localhost:8080/`);

    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.send(JSON.stringify(loginInfo)); 
})