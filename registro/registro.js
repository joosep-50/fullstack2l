const formulario = document.querySelector('.formulario-registro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const clave = document.getElementById('clave').value;
    const clave2 = document.getElementById('clave2').value;

    if (clave !== clave2) {
        alert("Las contraseñas no coinciden");
        return;
    }

    const usuario = { nombre, correo, contraseña: clave };

    // Obtener usuarios existentes o crear un array vacío
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el correo ya existe
    if (usuarios.some(u => u.correo === correo)) {
        alert("El correo ya está registrado");
        return;
    }

    usuarios.push(usuario); // agregar nuevo usuario
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Registro exitoso");
    window.location.href = "../login/login.html";
});
