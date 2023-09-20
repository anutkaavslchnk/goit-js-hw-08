import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

 const key = "feedback-form-state";

function fild() {
    const save = localStorage.getItem(key);
    if (save) {
        const parse = JSON.parse(save);
        form.elements.email.value = parse.email;

        form.elements.message.value = parse.message;
    }
}
fild();
form.addEventListener("input", throttle(function(event) {
    const formEl = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(key, JSON.stringify(formEl));
}, 500));

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formEl = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.removeItem(key);
    console.log(formEl);
     form.reset();
});
