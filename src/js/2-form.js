import '../css/styles.css';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

fillFormFields(formEl);

formEl.addEventListener('input', formOnChange);
formEl.addEventListener('submit', formOnSubmit);

function fillFormFields(form) {
  const dataFromLS = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (dataFromLS === null) {
    return;
  }

  for (const key in dataFromLS) {
    form.elements[key].value = dataFromLS[key];
    formData[key] = dataFromLS[key];
  }
}

function formOnChange(event) {
  const inputValue = event.target.value;
  const inputName = event.target.name;

  formData[inputName] = inputValue.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function formOnSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}
