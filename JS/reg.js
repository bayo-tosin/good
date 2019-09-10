 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwWzYO9qLrPhoxllBmhw-wimogb3J2Mu4",
    authDomain: "bayo-4f1a6.firebaseapp.com",
    databaseURL: "https://bayo-4f1a6.firebaseio.com",
    projectId: "bayo-4f1a6",
    storageBucket: "bayo-4f1a6.appspot.com",
    messagingSenderId: "163266415975",
    appId: "1:163266415975:web:673f0bb7f2caefc7"
  };
  
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 console.log("firebase loaded");
  //create a collection and empty document and save the instance to docRef variable 
  const db= firebase.firestore();
  let surname, firstname, email, address, phone, uname, password, cmpassword, sendingLayout, successLayout, failedLayout, container, login;
  container = document.getElementById("container");
 
  sendingLayout = document.getElementById("sendingLayout");
successLayout = document.getElementById("successLayout");
failedLayout = document.getElementById("failedLayout");

sendingLayout.style.display = "none";
successLayout.style.display ="none";
failedLayout.style.display ="none";

const submitData = document.getElementById("submitData");
submitData.addEventListener('click',()=>{
    fname = document.getElementById("firstname").value;
    sname = document.getElementById("surname").value;
    address = document.getElementById("contactaddress").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    uname = document.getElementById("uname").value;
    password = document.getElementById("password").value;
    cmpassword = document.getElementById("cmpassword").value;
    //validate the user input
    if(!fname.match(/^['a-z A-Z]+$/) || fname==""){
        alert("enter your surname")
    }
    else if(!sname.match(/^['a-z A-Z]+$/) || sname==""){
        alert("enter your first name")
    
    }
    else if(address ==""){
        alert("Enter your address")
    }
    else if(!email.includes("@")){
        alert("invalid email")
    }
        else if(!phone.match(/^[+0-9]+$/) || phone.length<11 || phone.length>11){
        alert("YOUR NUMBER IS INCORRECT")
    }
        else if(uname=="" || uname.length<4){
            alert("Your UserName should be greater than 4 digits")

        }
        else if(password=="" || password.length<6){
            alert("Your password length should not be less than 6")
        }
        else if(!cmpassword.match(password) || cmpassword==""){
            alert("Your password doesnt match created password")
        }
        else{
            sendData()
        }
    })
        const sendData = ()=>{
            container.style.display="none";
            /*fname.style.display ="none";
            sname.style.display="none";
            address.style.display="none";
            email.style.display="none";
            phone.style.display="none";
            uname.style.display="none";
            password.style.display="none";
            Cmpassword.style.display="none";*/
            sendingLayout.style.display="block";
            sendToDatabase();
        }
        const sendToDatabase = ()=>{
            let docRef = db.collection("collect").doc(phone);
            docRef.set({
            fname: fname,
            sname: sname,
            Email: email,
            phone: phone,
            address: address,
            uname: uname,
            password: password
        

})
    .then (function(){
    sendingLayout.style.display= "none";
     successLayout.style.display ="block";
 })
 .catch(function(error){
    container.style.display="block";
    console.log("error:"+error);
    failedLayout.style.display = "block";
})
   
}


