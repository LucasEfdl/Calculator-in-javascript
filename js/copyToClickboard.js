const resultInput = document.getElementById("result");

export default (ev) => {
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("sucess");
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("sucess");
  }
};
