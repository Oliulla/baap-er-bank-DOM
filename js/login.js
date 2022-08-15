// Step-1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', () => {
    // Step-2: get the email address from email input feild
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (typeof(userEmail) === 'string' && typeof(userPassword) === 'string') {
        window.location.href = 'bank.html';
    } else {
        alert('Wrong email or password');
    }

    //Danger: DO NOT VERIFY email password on the client side
    // step-4: verify email and password and check user either valid or Invalid
    // if(userEmail === 'sontan@baap.com' && userPassword === 'secret'){
    //     window.location.href = 'bank.html';
    // } else {
    //     alert('Wrong email or password');
    // }
});
// log in form end