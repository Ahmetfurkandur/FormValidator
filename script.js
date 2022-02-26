const form =  document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rePassword = document.getElementById('repassword');

function error(input, errorMessage) {
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = errorMessage;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid';
}

function checkRequired(inputs) {
    inputs.forEach(function(input){
        if (input.value==='') {
            error(input,`${input.id} is required`);
        }
        else{
            success(input);
        }
    })
    
}
function checkLength(input,min,max) {
    if(input.value.length < min){
        error(input, `${input.id} should be min ${min} character`);
    }
    else if (input.value.length > max) {
        error(input, `${input.id} should be max ${max} character`);
    }
    else{
        success(input);
    }
}

const checkEmail = (input) => {
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        success(input);
    }
    else{
        error(input,'Email is invalid!');
    }
};

const checkPassword = (input1,input2) => {
    if (input1.value !== input2.value) {
        error(input2, 'Passwords are\'nt match!');
    }
}


form.addEventListener('submit' ,(e) => {
    e.preventDefault();

    checkRequired([userName,email,password,rePassword]);
    checkEmail(email);
    checkLength(userName,7,15);
    checkPassword(password,rePassword);
});