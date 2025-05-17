const form = document.querySelector(".login-form");

form.addEventListener('submit',handleSubmit);

function handleSubmit (event) {
event.preventDefault();

const emailValue = event.currentTarget.elements.email.value.trim();
const passwordValue = event.currentTarget.elements.password.value.trim();

if (emailValue === '' || passwordValue === '') {
    alert ('All form fields must be filled in');
    return;
}
const formValue = {
    email: emailValue,
    password: passwordValue,
};

console.log(formValue);
form.reset();
}


const button = document.querySelector("button");
button.classList.add("btn-sub");

const labels = document.querySelectorAll("label");
labels.forEach(label => {
    label.classList.add("label-text");
});



