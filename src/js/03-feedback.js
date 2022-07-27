import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const email = formEl.email;
const message = formEl.message;

formEl.addEventListener('input', throttle(addInput, 500));
formEl.addEventListener('submit', addMessage);

function addInput(event) {
  const formData = { email: email.value, message: message.value };
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  
  };

function addMessage(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget;
  const formData = { email: email.value, message: message.value };

    if (email.value === "" || message.value === "" ) {
      alert(" Будь ласка, заповніть порожні поля ");
      return;
  };
  JSON.parse(localStorage.getItem("feedback-form-state"));
  console.log(formData);
  localStorage.removeItem("feedback-form-state");
  event.currentTarget.reset();
};

currentInputLocalStorage();

  function currentInputLocalStorage() {
  const currentInput = JSON.parse(localStorage.getItem('feedback-form-state'));
  
  if (currentInput) {
    email.value = currentInput.email;
    message.value = currentInput.message;

  };
};
