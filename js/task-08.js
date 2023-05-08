const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (!email || !password) {
    alert('Заповніть всі поля!!!');
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);

    form.reset();
  }
}