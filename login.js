// Lógica de JavaScript para el login
const btnLogin = document.getElementById('btnLogin');
const inputUser = document.getElementById('usuario');
const inputPassword = document.getElementById('password');



btnLogin.addEventListener('click', function () {
    // Definimos las credenciales "correctas"
    const usuarioCorrecto = "admin";
    const passwordCorrecto = "1234";
    // Obtenemos lo que el usuario escribió
    const usuarioIngresado = inputUser.value;
    const passwordIngresado = inputPassword.value;

    //Lógica de validación
    if (usuarioIngresado == usuarioCorrecto && passwordIngresado == passwordCorrecto) {
        //Si es correcto, redirigimos
        alert("Bienvenido");
        window.location.href = 'personajes.html';

    } else {
        //Si es incorrecto, mostramos un error y no redirigimos

        alert("Usuario o contraseña incorrectos");
        inputUser.value = "";
        inputPassword.value = "";
    }


});