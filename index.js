const formSelection = document.querySelector("#example-form");

formSelection.addEventListener("submit", () => {
  console.log("hi");
  preventDefault();
})

let username = document.querySelector("#name-input");
username.addEventListener("keyup", () => {
  const name = username.value;
  }
})

let userAge = document.querySelector("#age-input");
userAge.addEventListener("keyup", () => {
  const age = userAge.value;

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
