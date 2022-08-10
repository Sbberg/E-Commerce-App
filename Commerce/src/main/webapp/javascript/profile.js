//this finds current user and logs it in console
let userStorage = localStorage.getItem('currentUser');
console.log(userStorage);
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
greeting.innerText = `Welcome ${user.userFirstName}! Here you can change your information and add money to your account.`;


let infoLog = document.getElementById("infoLog");
//infoLog.innerText = `Sorry ${user} one or more fields is empty or doesn't meet requirements.`;

//buttons to work with html
let button = document.getElementById("button");

//Button functions
//save user info
// button.onclick = updateUserInfo();

let userId = user.userId;



function showUserInfo(userData){}

//onclick on html button

//Overall function to update user info
 async function updateUserInfo(event){
    event.preventDefault();

    //variable grabbed for user information
    
    

    let userName = document.getElementById("username-input").value;

    let userFirstName = document.getElementById("f-name-input").value;
    
    // let userLastName = document.getElementById("l_name-input").value;
    let userlname = document.getElementById('l-name-input').value;

    let address = document.getElementById('addressInput').value;

    let userEmail = document.getElementById('emailInput').value;

    let userPassword = document.getElementById('passwordInput').value;

    let balance = document.getElementById('balanceInput').value;
    // console.log(userId)
    // console.log(userName)
    // console.log(userFirstName)
    // console.log(userlname)
    // console.log(address)
    // console.log(userEmail)
    // console.log(userPassword)
    // console.log(balance)


 //the information that will be updated through fields
 let updateInfo ={
        userName:userName,
        userFirstName:userFirstName,
        userLastName:userlname,
        address:address,
        userEmail:userEmail,
        userPassword:userPassword,
        balance:balance,
        userId:userId
 };

 let jsonUpdateInfo = JSON.stringify(updateInfo);

//  log to make sure correct user data is grabbed
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
        // console.group("User Data")
        console.log("data: " + data);
        // console.log(data[0].userId);
        // console.log(data[0].username);
        // console.log(data[0].email);
        // console.log(data[0].address);
        // console.log(data[0].balance);
        // console.groupEnd("User Data")

        //localStorage.setItem('currentUser' , jsonUpdateInfo);
        // let userStorage = localStorage.getItem('currentUser');
        // console.log("USERSTORAGE "+userStorage);
        // let user = JSON.parse(userStorage);
        console.log("USER "+user);
        console.log("LOCALSTORE "+localStorage.getItem('currentUser'))
        
        login();

        setTimeout(()=>{ 
            
            window.location.reload();

        }, 5 * 1000)
        
        

            //checks to make sure on fields are empty
    //         if(username == null || password == null || email == null ||
    //         address == null ||lastname == null || firstname == null 
    //         && updateUserInfo()){
    //         infoLog.innerText = `Sorry ${user} one or more fields is empty or doesn't meet requirements.`;


    //         //sends a log describing issue
    //         console.log("one or more fields is empty or doesn't meet requirements.")
        
    //         }

    // infoLog.innerText = `changes have been saved`;
        
    } catch (error) {
        alert("There is an error: " + error)
        
    }
};

async function login(){
    

        let loginBody = {
            userId:userId
        };
        let JsonLoginBody = JSON.stringify(loginBody);
        

    try{
        const raw_response = await fetch(`http://localhost:8080/commerce/userId`, 
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Access-Control-Allow-Origin": "*"
            },
             body:JsonLoginBody
        });

      const content = await raw_response.json();

      console.log(user.userName);
      console.log(user.userPassword);
      console.log(raw_response);
      console.log(content);

      localStorage.setItem('currentUser' , JSON.stringify(content));

      
    }catch(error){
      console.log(error)
    }
    };
