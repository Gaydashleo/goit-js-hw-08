import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', addInput);
formEl.addEventListener('submit', addMessage);

const formData = {email, message};

function addInput(event) {
  const emailEl = email.value;
  
  localStorage.setItem("feedback-form-state", emailEl);
}

function addMessage(event) {
  const messageEl = message.value;
  localStorage.setItem("feedback-form-state", messageEl);
}


