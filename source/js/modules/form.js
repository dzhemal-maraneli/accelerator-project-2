const form = document.querySelector('.form__box');
const emailPattern = /^[a-zA-Zа-яА-ЯёЁ0-9._%+-]+@[a-zA-Zа-яА-ЯёЁ0-9.-]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$/;

const formEmailInput = form.querySelector('#user-email');
const formNumberInput = form.querySelector('#user-phone');

function isEmpty(input) {
  return input.value.trim() === '';
}

form.addEventListener('focusin', (evt) => {
  if (evt.target === formEmailInput || evt.target === formNumberInput) {
    const label = form.querySelector(`label[for='${evt.target.id}']`);
    label.classList.add('form__label--disabled');
  }
});

form.addEventListener('focusout', (evt) => {
  if ((evt.target === formEmailInput && isEmpty(formEmailInput)) || (evt.target === formNumberInput && isEmpty(formNumberInput))) {
    const label = form.querySelector(`label[for='${evt.target.id}']`);
    label.classList.remove('form__label--disabled');
  }
});

function formValidation() {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let validEmail = false;

    if (!emailPattern.test(formEmailInput.value) || isEmpty(formEmailInput)) {
      formEmailInput.classList.add('form__input--error');
    } else {
      validEmail = true;
    }

    if (validEmail) {
      form.submit();
    }
  });
}

formValidation();
