const button = document.querySelector('.email-form__button');
const input = document.querySelector('#email');
const errorLabel = document.querySelector('.email-form__error');

button.addEventListener('click', () => {
    if (input.checkValidity()) {
        errorLabel.textContent = '';
        input.classList.remove('email-form__input--error');
    } else {
        errorLabel.textContent = 'Valid email required';
        input.classList.add('email-form__input--error');
    }
});