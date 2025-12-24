document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault();
    registerUser();
  })
});

function registerUser() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('emailAddress').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    alert('Password does not match');
    return;
  }


  window.localStorage.setItem('firstName', firstName);
  window.localStorage.setItem('lastName', lastName);
  window.localStorage.setItem('email', email);
  
  window.location.href = "../";
}







