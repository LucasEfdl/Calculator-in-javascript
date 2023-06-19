import { input } from "./const.js";
import calculate from "./calculate.js";
import { captureKeys, themeSwitcher } from "./eventListener.js";
import copyToClickboard from "./copyToClickboard.js";

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", () => {
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", captureKeys);

document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClickboard);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
