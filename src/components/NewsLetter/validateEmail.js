import React from 'react'
document.addEventListener("DOMContentLoaded", function() {
let emailInput = document.getElementById("emailInput");
const button= document.getElementById("validate-user");
let emailError = document.getElementById("error-email");
let registerSuccess = document.getElementById("reg-success");

const emailValidator =  /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

let emailOk = false;

function validateEmail() {

    if (emailInput.value.length < 1) {
        emailError.textContent ="You have to enter a mail";
        emailError.style.color ="rgb(196, 114, 114)";
        return emailOk;
    }
        
        
        else if  (emailValidator.test(emailInput.value)) {
                emailError.textContent ="Your email is valid";
                emailError.style.color = "green";
                emailOk = true;
                return emailOk;
        }
            else {
                emailError.textContent= "You have to enter a valid email";
                emailError.style.color ="rgb(196, 114, 114)";
                return emailOk;
            }
             }
    
function onClick() {
    validateEmail();
   

    if(emailOk) {
        registerSuccess.textContent ="You hav been succesfully registered";
        registerSuccess.style.color = "green";
    }
    else {
        registerSuccess.textContent ="Registration failed";
        registerSuccess.style.color ="rgb(196, 114, 114)";
    }
}


button.addEventListener('click', onClick);
});