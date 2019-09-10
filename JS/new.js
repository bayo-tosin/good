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
let container, sendingLayout, successLayout, failedLayout,name;
container = document.getElementById("container");
sendingLayout = document.getElementById("sendingLayout");
successLayout = document.getElementById("successLayout");
failedLayout = document.getElementById("failedLayout");

sendingLayout.style.display = "none";
successLayout.style.display = "none";
failedLayout.style.display = "none";

const submitData = document.getElementById("submitData");
 submitData.addEventListener('click',()=>{
  name = document.getElementById("name").value;
    if(name!=null){
        sendData();
    }else{

    }
})
const sendData = ()=>{
    container.style.display="none";
    sendingLayout.style.display="block";
    sendTodatabase();
}

    const sendTodatabase = ()=>{
        let docRef = db.collection("test").doc(name);
        docRef.set({
            name: name

        })
        .then (function(){
            sendingLayout.style.display = "none";
            successLayout.style.display = "block";
        })
        .catch(function(error){
            container.style.display ="block";
            console.log("error:"+error);
            failedLayout.style.display = "block";
        })
    
        
}
