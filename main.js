import {
  showConfetti,
  getFormData,
  playFireworks,
} from "./utils.js";

getFormData((data) => {
  console.log(data)
  playFireworks();
  showConfetti();
});