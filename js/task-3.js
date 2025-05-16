const form = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

function handlerInput (event) {
const spanValue = event.currentTarget.value.trim();
span.textContent = spanValue === "" ? "Anonymous" : spanValue;
} 

form.addEventListener("input", handlerInput);