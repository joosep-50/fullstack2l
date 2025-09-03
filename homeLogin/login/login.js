const formulario = document.querySelector('.iniciar-sesion');

// USUARIOS Y ADMINISTRADOR en el mismo submit
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // 🔹 Validación especial para Administrador (secreto)
  if (email === 'adm@gmail.com' && password === '00000000') {
    alert('Bienvenido, Administrador');
    window.location.href = '../homeAdministrador/home.html';
    return;
  }

  // 🔹 Validación de usuarios normales (desde localStorage)
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.correo === email);

  if (!usuario) {
    alert('Correo no registrado');
    return;
  }

  if (usuario.contraseña !== password) {
    alert('Contraseña incorrecta');
    return;
  }

  alert(`Bienvenido, ${usuario.nombre}`);
  window.location.href = '../../homeusuario/home.html';
});
