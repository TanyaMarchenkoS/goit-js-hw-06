const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, pessword }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Заполнены не все поля, пожалуйста заполните');
    };

    const obj = { Email: email.value, Password: password.value };

    console.log(obj);
    form.reset();
});
