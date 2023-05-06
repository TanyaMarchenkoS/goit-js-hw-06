const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Заповніть всі поля!!!');
    };

    const objEl = { Email: email.value, Password: password.value };

    console.log(objEl);
    form.reset();
});

