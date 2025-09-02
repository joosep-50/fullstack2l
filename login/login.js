const formulario = document.querySelector('.iniciar-sesion');
const btnAdmin = document.getElementById('btn-admin');

// 1) USUARIOS (botón "Ingresar" => submit del formulario)
formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Evitar que el admin intente entrar por aquí
  if (email === 'adm@gmail.com') {
    alert('Para el Administrador, usa el botón "Administrador".');
    return;
  }

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
  window.location.href = '../index/index.html';
});

// 2) ADMINISTRADOR (botón "Administrador" => click)
btnAdmin.addEventListener('click', function () {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === 'adm@gmail.com' && password === '00000000') {
    alert('Bienvenido, Administrador');
    window.location.href = '../administrador/adm.html';
  } else {
    alert('Correo o contraseña incorrectos para Administrador');
  }
});
