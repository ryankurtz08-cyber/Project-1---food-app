document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('signInForm').addEventListener('submit', (event) => {
        event.preventDefault();
        login();
    })
});

function login() {
    const email = document.getElementById('emailAddress').value;
    const password = document.getElementById('password').value;
    if (email === 'ryan@gmail.com' && password === 'ryan') {
        window.localStorage.setItem('firstName', 'ryan');
        window.localStorage.setItem('lastName', 'kurtz');
        window.localStorage.setItem('email', email);
    } else {
        alert('WRONG');
        return
    }


    window.location.href = "../";
}


