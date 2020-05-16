let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailValue = "";
let emailInput = document.querySelector('#email');
let btnSub = document.querySelector('#btn');
let icon = document.querySelector('#error')
let error = document.querySelector('#warn');

const validateEmail = (email) => {
    return emailRegex.test(email);
};

emailInput.addEventListener("keyup", (e) => {
    emailValue = e.target.value;
});

btnSub.addEventListener("click", (e) => {
    e.preventDefault();
    if (emailValue.length === 0 || validateEmail(emailValue) === false) {
        error.style.display = "flex";
        icon.style.display ="flex";
    } else {
        error.style.display = "none";
        icon.style.display = "none";
    }
});