const form = document.forms.registrationForm;
const submit = document.querySelector('.submit');
const cbAgreement = form.elements.cbAgreement;

cbAgreement.addEventListener('change', () => {
    if (cbAgreement.checked === true){
        submit.disabled = false;
    }
})


form.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log('mao');
})