const subscribeButton = document.querySelector('.email-form__button');
const dismissButton = document.querySelector('.success-message__button');
const input = document.querySelector('#email');
const errorLabel = document.querySelector('.email-form__error');

subscribeButton.addEventListener('click', () => {
    if (input.checkValidity() && input.value !== '') {
        errorLabel.textContent = '';
        input.classList.remove('email-form__input--error');

        const validEmail = input.value;
        document.querySelector('.success-message__description').innerHTML = `A confirmation email has been sent to <b>${validEmail}</b>. Please open it and click the button inside to confirm your subscription`

        document.querySelector('.success-message').classList.remove('success-message--hidden');
        document.querySelector('.newsletter-signup').classList.add('newsletter-signup--hidden');

    } else {
        errorLabel.textContent = 'Valid email required';
        input.classList.add('email-form__input--error');
    }
});

dismissButton.addEventListener('click', () => {
    document.querySelector('.success-message').classList.add('success-message--hidden');
    document.querySelector('.newsletter-signup').classList.remove('newsletter-signup--hidden');
});

input.addEventListener('input', () => {
    if (errorLabel.textContent !== '') {
        errorLabel.textContent = '';
    }

    if (input.classList.contains('email-form__input--error')) {
        input.classList.remove('email-form__input--error');
    }
});