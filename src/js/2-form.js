const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
form.addEventListener('input', inputChange);
function inputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    form.email.value = parsedData.email || '';
    form.message.value = parsedData.message || '';

    // Оновлюємо formData відповідно до збережених даних
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}
populateForm(); // Викликаємо при завантаженні сторінки

// Очищення форми
form.addEventListener('submit', event => {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  console.log(formData); // Виводимо у консоль

  localStorage.removeItem('feedback-form-state'); // Очищаємо localStorage

  formData.email = '';
  formData.message = '';

  form.reset(); // Очищаємо форму
});
