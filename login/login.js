const formulario = document.querySelector('.iniciar-sesion');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtener todos los usuarios
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Buscar usuario por correo
    const usuario = usuarios.find(u => u.correo === email);

    if (!usuario) {
        alert("Correo no registrado");
        return;
    }

    if (usuario.contraseña !== password) {
        alert("Contraseña incorrecta");
        return;
    }

    alert(`Bienvenido, ${usuario.nombre}`);
    window.location.href = "../index/index.html";
});
