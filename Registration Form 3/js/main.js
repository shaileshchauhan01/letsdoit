function onButtonClick(){
    //We are getting values of input fields
    const userName=document.getElementById("userName").value;
    const email=document.getElementById("email").value;
    //we are getting span element to modify content
    const errUserName=document.getElementById("errUserName");
    const errEmail=document.getElementById("errEmail");

    console.log("userName: "+userName+" email: "+email);
    if(userName==" "||userName.length==0){
        errUserName.innerText="First enter UserName";
        errUserName.style.color="darkred";
        return false;
    }else{
        errUserName.innerText="";       
    }
    if(email==" "||email.length==0){
        errEmail.innerText="First enter email";
        errEmail.style.color="darkred";
        return false;
    }
    else{
        errEmail.innerText="";        
    }
    if(password==" "||password.length==0){
        errPassword.innerText="First enter the password";
        errPassword.style.color="darkred";
        return false;
    }
    else{
        errPassword.innerText="";        
    }
    return true;
}