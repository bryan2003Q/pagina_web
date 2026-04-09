
const btnLogin = document.getElementById('btnLogin');
const inputUser = document.getElementById('username');
const inputPassword = document.getElementById('password');



btnLogin.addEventListener('click', function () {
    // Define "correct" credentials
    const correctUsername = "admin";
    const correctPassword = "1234";
  // Get user input values
    const enteredUsername = inputUser.value;
    const enteredPassword = inputPassword.value;

    // Validation logic
    if (enteredUsername == correctUsername && enteredPassword == correctPassword) {
       // Successful login: Redirect to characters page
        alert("Bienvenido");
        window.location.href = 'pages/characters.html';

    } else {
        
        // Invalid credentials: Show error and clear inputs
        alert("Usuario o contraseña incorrectos");
        inputUser.value = "";
        inputPassword.value = "";
    }


});