let username=document.getElementById('username');
let pass=document.getElementById('password');
let butns=document.getElementById('submitBtn');
let usermsg=document.getElementById('username-msg');
let passmsg=document.getElementById('password-msg');


let userNameOk=false;
let paswordOk=false;

function usernameHandler(){
    let userValue=event.target.value;
    if(userValue.length <5)
        {
            usermsg.innerHTML='At leadt 5 characters are required';
        }
        else{
            userNameOk=true;
            usermsg.innerHTML='';
        }
    
    //console.log(event,target);   target event arano undakiyathe
}

function passwordHandler(){
    let pas=event.target.value;
    if(pas.length <5)
        {
            passmsg.innerHTML='At leadt 8 characters are required';
        }
        else{
            paswordOk=true;
            passmsg.innerHTML='';
        }
}

function submitHandler(){
    event.preventDefault();
    if(userNameOk && paswordOk)
        {
            username.style.border='2px solid green';
            pass.style.border='2px solid green';
        }
        else
        {
            username.style.border='2px solid red';
            pass.style.border='2px solid red';
        }
}