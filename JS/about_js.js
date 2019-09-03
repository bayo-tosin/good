function myfunction() {
    var fname=document.getElementById("firstname").value;
    var lname=document.getElementById("lastname").value;
    var contactId=document.getElementById("contactaddress").value;
    var Email=document.getElementById("email").value;
    var E= Email.includes("@");
    var phone_num= document.getElementById("phone").value;
    var sub= document.getElementById("subject").value;

    if(!fname.match(/^[a-zA-z]+$/)){
        alert("invalid name")
    }
    
    else if(!lname.match(/^[a-zA-z]+$/)){
        alert("enter your last name")
    }

    else if(contactId==null || contactId==""){
        alert("enter your address")
    }
       
    else if(!Email.includes("@")){
        alert("invalid email")
    }
         else if(phone_num.length<11 || phone_num.length>11){
             alert("YOUR NUMBER IS INCORRECT")
    }
    else if(sub=="" || sub==null){
        alert("please leave a message")

    } 
    else{
        alert("SUBMITTED")
    }
}