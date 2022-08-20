// console.log("hello");

document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('Butten is working');
    const emailField = document.getElementById('email-input');

    const mail = emailField.value;

    const passField = document.getElementById('password-input');

    const password = passField.value;

    // console.log(mail, password);

    if (mail == "mamun@gmail.com" && password == 12345678) {
        console.log("valid user");
    }
    else {
        console.log("Invalid user");
    }


})