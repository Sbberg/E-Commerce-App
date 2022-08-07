//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(user);
console.log(userJSON);
console.log(userJSON.user_Id);

//defines and changes that greeting header
let greeting = document.getElementById("greeting")
greeting.innerText = `Here you can change your information and add money to your account ${user}`

let infoLog = document.getElementById("infoLog");
//infoLog.innerText = `Sorry ${user} one or more fields is empty or doesn't meet requirements.`;

//buttons to work with html
let button = document.getElementById("button");

//Button functions
//save user info
button.onclick = updateUserInfo;


function showUserInfo(userData){

    //checks to make sure on fields are empty
    if(username == null || password == null || email == null ||
        address == null ||lastname == null || firstname == null 
        && updateUserInfo()){
            infoLog.innerText = `Sorry ${user} one or more fields is empty or doesn't meet requirements.`;


            //sends a log describing issue
            console.log("one or more fields is empty or doesn't meet requirements.")
        
    }
    infoLog.innerText = `changes have been saved`;


}


//Overall function to update user info
async function updateUserInfo(){

    //variable grabbed for user information
    let userid = user.u_id;
    let userName = document.getElementById("username-input").value
    let userFirstName = document.getElementById("f_name-input").value
    let userLastName = document.getElementById("l_name-input").value
    let address = document.getElementById("address-input").value
    let userEmail = document.getElementById("email-input").value
    let userPassword = document.getElementById("password-input").value
    let balance = document.getElementById("balance-input").value
 
 //the information that will be updated through fields
 let updateInfo ={
     u_id:userid,
     username:userName,
     firstname:userFirstName,
     lastname:userLastName,
     address:address,
     email:userEmail,
     password:userPassword,
     balance:balance
 };

 //log to make sure correct user data is grabbed
 console.log(updateInfo);
 

    try {
        const raw_response = await fetch("PUT",`http://localhost:8080/commerce/user`,
            {

                //Put method to update data
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                    "User-Id": userJSON.u_Id

            },
            body:username,
            body:firstname,
            body:lastname,
            body:address,
            body:email,
            body:password,
            body:balance,
            
        });

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        //to make sure it made it past the throw error.
        console.log("Request was completed")        

        
        const data = await raw_response.json();


        //console all the json information inside a group
        console.group("User Data")
        console.log(data);
        console.log(data[0].u_id);
        console.log(data[0].username);
        console.log(data[0].email);
        console.log(data[0].address);
        console.log(data[0].balance);
        console.groupEnd("User Data")

        
    } catch (error) {
        alert("There is an error: " + error)
        
    }
};