let email = document.querySelector("#email");
let password = document.querySelector("#password");

let emailErrorTag = document.querySelector("#emailError");
let passwordErrorTag = document.querySelector("#passwordError");

let emailError = "";
let passwordError = "";

function validateEmail() {
  let inputEmail = email.value;
  //   debugger;

  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (inputEmail === "") {
    emailError = "Please Enter Your Email";
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
  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  if (inputPassword === "") {
    passwordError = "Please Enter Your Password";
    passwordErrorTag.innerHTML = passwordError;
    return false;
  } else if (!passwordRegex.test(inputPassword)) {
    passwordError = "Password doesnot matched";
    passwordErrorTag.innerHTML = passwordError;
    return false;
  } else {
    passwordError = "";
    passwordErrorTag.innerHTML = passwordError;
    return true;
  }
}

password.addEventListener("keyup", validatePassword);
const loginForm = document.querySelector(".login__container");
loginForm.addEventListener("submit", formSubmit);

async function formSubmit(event) {
  event.preventDefault();

  let loginData = {
    email: email.value,
    password: password.value,
  };
  if (validateEmail() && validatePassword()) {
    const LOGIN_URL = "https://reqres.in/api/login";
    let response = await fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify(loginData), // "{"email": "aayush@gmail.com"}"
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    alert("Login Succesfully")
    localStorage.setItem("loginToken", data.token);
    // console.log(data);
    location.href = "../index.html";
  }
}

import { toogleNavLinks } from "./toggle.js";
import { toggleLogout } from "./toggle.js";
toogleNavLinks();

const logOutBtn = document.querySelector(".logout");
logOutBtn.addEventListener("click", toggleLogout);





// export function toogleNavLinks() {
//   const logoutNav = document.querySelector(".logout");
//   if (localStorage.getItem("loginToken")) {
//     logoutNav.style.display = "block";
//   } else {
//     logoutNav.style.display = "none";
//   }
// }
