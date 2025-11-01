const button = document.querySelector('.form--button');
const input = document.querySelector('#email');
const errorLabel = document.querySelector('.label-error');

button.addEventListener('click', () => {
    if (input.checkValidity()) {
        errorLabel.textContent = '';
    } else {
        errorLabel.textContent = 'Valid email required';
    }
});