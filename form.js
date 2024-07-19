let Fname = document.getElementById("Fname");
let nameErrorTag = document.querySelector("#nameError");
let nameError = "";
let isValidated = false;
// console.log(Fname.value)

function validateName() {
  let inputName = Fname.value;

  if (inputName === "") {
    nameError = "Please enter yourFull Name.";
    nameErrorTag.innerHTML = nameError;
    return false;
  } else if (inputName.length <= 2) {
    nameError = "Name should be more than two character.";
    nameErrorTag.innerHTML = nameError;
    return false;
  } else if (inputName.length > 35) {
    nameError = "Name should be less than six character.";
    nameErrorTag.innerHTML = nameError;
    return false;
  } else {
    nameError = "";
    nameErrorTag.innerHTML = nameError;
    return true;
  }
}
Fname.addEventListener("keyup", validateName);

let address = document.querySelector("#address");
let addressErrorTag = document.querySelector("#addressError");
let addressError = "";

function validateAddress() {
  let inputAddress = address.value;
//   console.log(inputAddress);
  if (inputAddress === "") {
    addressError = "Please enter your address";
    addressErrorTag.innerHTML = addressError;
    return false;
  } else if (inputAddress.length <= 4) {
    addressError = " Address should be more than four character";
    addressErrorTag.innerHTML = addressError;
    return false;
  } else {
    addressError = "";
    addressErrorTag.innerHTML = addressError;
    return true;
  }
}
address.addEventListener("keyup", validateAddress);

let feedback = document.querySelector("#feed");
let feedbackErrorTag = document.querySelector("#feedbackError")
let feedbackError = ""

function validateFeed() {
    let inputFeed = feedback.value;
    
    if (inputFeed === "") {
        feedbackError = "Please enter your address"
        feedbackErrorTag.innerHTML = feedbackError;
        return false;
    }
    else if (inputFeed.length <= 3) {
        feedbackError = "The address should be more than two character"
        feedbackErrorTag.innerHTML = feedbackError;
        return false;
    }
    else {
        feedbackError = ""
        feedbackErrorTag.innerHTML = feedbackError;
        return true;
    }
}
feedback.addEventListener("keyup", validateFeed);


let email = document.querySelector("#email");
let emailErrorTag = document.querySelector("#mailError");
let emailError = "";

function validateEmail() {
  let inputEmail = email.value;
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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






function formValidate(event) {
  event.preventDefault();
  console.log(validateAddress, validateEmail, validateName, validateFeed);
  let data = {
    fulName: Fname.value,
    address: address.value,
    email: email.value,
  };
  if (validateName() && validateEmail() && validateAddress() && validateFeed) {
    alert("Your Details: " + JSON.stringify(data));
    location.reload();
  }
}



// console.log(address)
// address.addEventListener('keyup', () => {
//     console.log(address.value)
// })
