import {
  showConfetti,
  getFormData,
  playFireworks,
  playTrombone,
  hideError,
  showError,
  generateNumber,
} from "./utils.js";

getFormData(({ guess }) => {
  const randomNumber = generateNumber();
  console.log(randomNumber)
  hideError();

  document.getElementById("answer").innerHTML = randomNumber;

  // if number matches random number then success
  if (guess == randomNumber) {
    playFireworks();
    showConfetti();
  } else {
    playTrombone();
    showError();
  }
});