let input = document.getElementById('input');
let inputvalidate = document.getElementById("inputvalidate");
let input_name = document.getElementById('input_name');
let namevalidate = document.getElementById('namevalidate');
let btn = document.getElementById('btn');
let Message = document.getElementById('Message');
let input1 = document.getElementById('input1');

function validInput() {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(input.value)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
        inputvalidate.classList.add('d-none');
        inputvalidate.classList.remove('d-block');
        return true;
    } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        inputvalidate.classList.add('d-block');
        inputvalidate.classList.remove('d-none');
        return false;
    }
}

input.addEventListener('blur', () => {
    validInput();
    toggleButton();
});

function validateName() {
    let regex = /^[A-Z][a-z]+$/;
    if (regex.test(input_name.value)) {
        input_name.classList.add('is-valid');
        input_name.classList.remove('is-invalid');
        namevalidate.classList.add('d-none');
        namevalidate.classList.remove('d-block');
        return true;
    } else {
        input_name.classList.add('is-invalid');
        input_name.classList.remove('is-valid');
        namevalidate.classList.add('d-block');
        namevalidate.classList.remove('d-none');
        return false;
    }
}

input_name.addEventListener('blur', () => {
    validateName();
    toggleButton();
});

function toggleButton() {
    btn.disabled = !(validInput() && validateName());
}

function dealt() {
    input_name.value = '';
    input.value = '';
    Message.value = '';
    input1.value = '';
    input_name.classList.remove('is-valid', 'is-invalid');
    input.classList.remove('is-valid', 'is-invalid');
    inputvalidate.classList.add('d-none');
    namevalidate.classList.add('d-none');
    createToast()
}



const notifications = document.querySelector(".notifications");
const buttons = document.getElementById(".btn");

const toastDetails = {
    timer: 5000,
};

const removeToast = (toasts) => {
    toasts.classList.add("hide");
    setTimeout(() => toasts.remove(), 500);
};

const createToast = () => {
    const toasts = document.createElement("li");
    toasts.className = `toasts success`;
    toasts.innerHTML = `<div class="column">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>Your message has been sent.</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toasts);
    toasts.timeoutId = setTimeout(() => removeToast(toasts), toastDetails.timer);
};
function asw(){
    dealt();
    
};


btn.addEventListener("click", () => {
    if (input_name.value.trim() === '') {
       
    } else {
        asw(); 
    }
});