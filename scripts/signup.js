let fullName = document.querySelector("#Fname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPw = document.querySelector("#confirmPw");

let nameErrorTag = document.querySelector("#nameError");
let emailErrorTag = document.querySelector("#emailError");
let passwordErrorTag = document.querySelector("#passwordError");
let confirmPwErrorTag = document.querySelector("#confirmPwError");

let nameError = "";
let emailError = "";
let passwordError = "";
let confirmPwError = "";

function validateFname() {
  let inputFname = fullName.value;
  //   debugger;
  if (inputFname === "") {
    nameError = "Please Enter Your Full Name";
    nameErrorTag.innerHTML = nameError;
    return false;
  } else if (inputFname.length <= 2) {
    nameError = "Full Name should be more than two character.";
    nameErrorTag.innerHTML = nameError;
    return false;
  } else {
    nameError = "";
    nameErrorTag.innerHTML = nameError;
    return true;
  }
}
fullName.addEventListener("keyup", validateFname);

function validateEmail() {
  let inputEmail = email.value;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //   debugger;
  if (inputEmail === "") {
    emailError = "Please enter your Email";
    emailErrorTag.innerHTML = emailError;
    return false;
  } else if (!emailRegex.test(inputEmail)) {
    emailError = "Invaild Email";
    emailErrorTag.innerHTML = emailError;
    return false;
  } else {
    emailError = "";
    emailErrorTag.innerHTML = emailError;
    return true;
  }
}
email.addEventListener("keyup", validateEmail);

function validatePassword() {
  let inputPassword = password.value;

  if (inputPassword === "") {
    passwordError = "Please Enter the Password";
    passwordErrorTag.innerHTML = passwordError;
    return false;
  } else if (inputPassword.length < 5) {
    passwordError = "Entered password should be more than four character";
    passwordErrorTag.innerHTML = passwordError;
    return false;
  } else {
    passwordError = "";
    passwordErrorTag.innerHTML = passwordError;
    return true;
  }
}
password.addEventListener("keyup", validatePassword);

function validateConfirmPw() {
  let inputConfirmPw = confirmPw.value;
  // debugger;
  if (inputConfirmPw == "") {
    confirmPwError = "Please Re-enter the password";
    confirmPwErrorTag.innerHTML = confirmPwError;
    return false;
  } else if (inputConfirmPw !== password.value) {
    confirmPwError = "Entered password doesnot matched";
    confirmPwErrorTag.innerHTML = confirmPwError;
    return false;
  } else {
    confirmPwError = "";
    confirmPwErrorTag.innerHTML = confirmPwError;
    return true;
  }
}

confirmPw.addEventListener("keyup", validateConfirmPw);
const signUpForm = document.querySelector(".signup__container");
signUpForm.addEventListener("submit", validateForm);

function validateForm(event) {
  //   console.log(event);
  event.preventDefault();
  // console.log(validateAddress, validateEmail, validateName, validateFeed);

  let data = {
    Fname: fullName.value,
    email: email.value,
    password: password.value,
    confirmPw: confirmPw.value,
  };
  if (
    validateFname() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPw()
  ) {
    alert("Your Details: " + JSON.stringify(data));
    location.reload();
  }
}

import { toogleNavLinks } from "./toggle.js";
import { toggleLogout } from "./toggle.js";
toogleNavLinks();

const logOutBtn = document.querySelector(".logout");
logOutBtn.addEventListener("click", toggleLogout);
