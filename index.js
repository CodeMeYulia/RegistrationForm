const form = document.forms.registrationForm;
const submit = document.querySelector('.submit');
const cbAgreement = form.elements.cbAgreement;

const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');
const inputAge = document.getElementById('inputAge');
const inputGender = document.getElementById('gender');

//разблокируем кнопку сабмита при активном чекбоксе
cbAgreement.addEventListener('change', () => {
    if (cbAgreement.checked === true){
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
})

function checkName(){
    let nameRegex = /^[a-zA-Zа-яА-Я ]+$/;
    const errorName = document.getElementById('errorName');
    if (nameRegex.test(inputName.value)){
        alert('Привет,' + inputName.value);
        errorName.style.display = 'none';
        return true;
    } else {
        errorName.textContent = 'имя некорректно!';
        errorName.style.color = 'red';
        errorName.style.display = 'block';
        return false;
    }
}

function checkEmail(){
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const errorEmail = document.getElementById('errorEmail');
    if (emailRegex.test(inputEmail.value)){
        alert('email валиден');
        errorEmail.style.display = 'none'
    } else {
    errorEmail.textContent = 'укажите валидный email';
    errorEmail.style.color = 'red';
    errorEmail.style.display = 'block'
}
};

// function checkAge(){
//     console.log(checkAge);
// };

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    checkName();
    // checkEmail();
    let user = {
        name: inputName.value,
        email: inputEmail.value,
        age: inputAge.value,
        // gender: inputGender.checked.value,
    }
    console.log(user);
    inputName.value = '';
    inputEmail.value = ''; 
})