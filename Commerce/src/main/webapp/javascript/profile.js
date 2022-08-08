//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
let user = JSON.parse(userStorage);
console.log(user);
console.log(user.userId);
console.log(user.userName);


//defines and changes that greeting header
let usernameDisplay = document.getElementById("username-display");
    usernameDisplay.innerText = `${user.userName}`

let userFirstNameDisplay = document.getElementById("f_name-display");
    userFirstNameDisplay.innerText = `${user.userFirstName}`

let userLastNameDisplay = document.getElementById("l_name-input")
    userLastNameDisplay.innerText =`${user.userLastName}`

let addressDisplay = document.getElementById("address-input")
    addressDisplay.innerText =`${user.address}`

let userEmailDisplay = document.getElementById("email-input")
    userEmailDisplay.innerText =`${user.userEmail}`

let userPasswordDisplay = document.getElementById("password-input")
    userPasswordDisplay.innerText =`${user.userPassword}`

let balanceDisplay = document.getElementById("balance-input")
    balanceDisplay.innerText =`$${user.balance}`

let greeting = document.getElementById("greeting")
greeting.innerText = `Here you can change your information and add money to your account ${user.userFirstName}`;



let infoLog = document.getElementById("infoLog");
//infoLog.innerText = `Sorry ${user} one or more fields is empty or doesn't meet requirements.`;

//buttons to work with html
let button = document.getElementById("button");

//Button functions
//save user info
button.onclick = updateUserInfo;


function showUserInfo(userData){}



//Overall function to update user info
async function updateUserInfo(){

    //variable grabbed for user information
    let userId = user.userId;

    let userName = document.getElementById("username-input").value;

    let userFirstName = document.getElementById("f_name-input").value;
    
    let userLastName = document.getElementById("l_name-input").value;

    let address = document.getElementById("address-input").value;

    let userEmail = document.getElementById("email-input").value;

    let userPassword = document.getElementById("password-input").value;

    let balance = document.getElementById("balance-input").value;
 
 //the information that will be updated through fields
 let updateInfo ={
        userName:userName,
        userFirstName:userFirstName,
        userLastName:userLastName,
        address:address,
        userEmail:userEmail,
        userPassword:userPassword,
        balance:balance,
        userId:userId
 };

 let jsonUpdateInfo = JSON.stringify(updateInfo);

 //log to make sure correct user data is grabbed
 console.log(updateInfo);
 console.log(jsonUpdateInfo);
 

    try {
        const raw_response = await fetch(`http://localhost:8080/commerce/userupdate`,
            {

                //Put method to update data
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*",
                    // "userId": user.userId
            },
            body:jsonUpdateInfo
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

        
        
        // window.location.reload();

            //checks to make sure on fields are empty
            if(username == null || password == null || email == null ||
            address == null ||lastname == null || firstname == null 
            && updateUserInfo()){
            infoLog.innerText = `Sorry ${user} one or more fields is empty or doesn't meet requirements.`;


            //sends a log describing issue
            console.log("one or more fields is empty or doesn't meet requirements.")
        
            }

    infoLog.innerText = `changes have been saved`;
        
    } catch (error) {
        alert("There is an error: " + error)
        
    }
};