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
  //initialize firestore database and save the instance to db variable 
  const db= firebase.firestore();
  //create a collection and empty document and save the instance to docRef variable 
  const docRef = db.collection("register").doc();
  let save = document.getElementById("save");


  let fname, sname, email, phone, uname, sub, password, cmpassword, contactId;
const date= Date.now();
  save.addEventListener("click", () => {
     fname=document.getElementById("firstname").value;
     sname=document.getElementById("surname").value;
     contactId=document.getElementById("contactaddress").value;
     email=document.getElementById("email").value
     phone=document.getElementById("phone").value;
     uname=document.getElementById("uname").value;
     password=document.getElementById("password").value;
     cmpassword=document.getElementById("cmpassword").value;
     sub= document.getElementById("subject").value;

    if(!fname.match(/^[a-zA-z]+$/)|| fname==""){
        alert("Enter Your Surname")
    }
    
    else if(!sname.match(/^[a-zA-z]+$/)|| sname==""){
        alert("enter your fast name")
        
    }

    else if(contactId==null || contactId==""){
        alert("enter your address")
    }
       
    else if(!email.includes("@")){
        alert("invalid email")
    }
         else if(!phone.match(/^[0-9]+$/)||phone.length<11 || phone.length>11){
             alert("YOUR NUMBER IS INCORRECT")
    }

    else if(uname==""|| uname.length<4){
        alert("Input Your Name")
    }

    else if(password==""|| password.length<6){
        alert("Your password length should not be less than 6")
    }

    else if(!cmpassword.match(password) ||cmpassword==""){
        alert("Password Don't Match")        
    }
       
    else if(sub=="" || sub==null){
        alert("please leave a message")

    }

    else{
        alert("SUBMITTED");
        
docRef.set({
    Name: name,
    Email: email,
    Contact: contactId,
    Phone: phone,
    UserName: uname,
    Password: password
    })
.then(function(){
    console.log("Successfully Saved");
  })
  .catch(function(error){
    console.log("Got an error:" + error);
});
    }
})