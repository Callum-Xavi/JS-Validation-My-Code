const formSelection = document.querySelector("#example-form");

// Handling errors with function
function outputError(fieldID, errorMesage) {
  console.log("running");
  let errorPlaceholder = document.querySelector("#" + fieldID + "-error");
  errorPlaceholder.innerText = errorMesage;

}


formSelection.addEventListener("submit", () => {
  console.log("hi");
  preventDefault();
})

let username = document.querySelector("#name-input");
username.addEventListener("keyup", (event) => {
  const name = username.value;
  if (name.length > 10) {
    outputError(event.target.id, "Error, username must be 10 characters or less");
  } else {
    outputError(event.target.id, "")
  }

})

// fix so that validation adhears when user uses up/down arrows on number box
let userAge = document.querySelector("#age-input");
userAge.addEventListener("keyup", (event) => {
  // age is now integer type
  const age = Number(userAge.value);
  if (age > 10 || age < -10) {
    outputError(event.target.id, "Error, value must be between (and including) numbers: -10 and 10");
  }

  else {
    outputError(event.target.id, "");
  }

})

const userExtraInfo = document.querySelector("#info-input");
userExtraInfo.addEventListener("keup", () => {
  const extraInfo = userExtraInfo.value;

})

const userPrivacy = document.querySelector("#privacy-input");
userPrivacy.addEventListener("keyup", () => {
  const privacy = userPrivacy.value;

})

const userFeedback = document.querySelector("#comments-input");
userFeedback.addEventListener("keyup", () => {
  const feedback = userFeedback.value;
})

const userTerms = document.querySelector("#terms-input");
userTerms.addEventListener("keyup", () => {
  const terms = userTerms.value;
})
