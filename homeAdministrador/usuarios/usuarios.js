const tablaUsuarios = document.getElementById('usuarios-body');
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// Mostrar usuarios en tabla
function mostrarUsuarios() {
    tablaUsuarios.innerHTML = "";

    usuarios.forEach((usuario, index) => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>
                ${usuario.contraseña}
                <button class="btn-accion" onclick="editarUsuario(${index})">✏️</button>
                <button class="btn-accion eliminar" onclick="eliminarUsuario(${index})">🗑️</button>
            </td>
        `;

        tablaUsuarios.appendChild(fila);
    });
}

// Editar usuario
function editarUsuario(index) {
    const usuario = usuarios[index];

    const nuevoNombre = prompt("Nuevo nombre:", usuario.nombre);
    const nuevoCorreo = prompt("Nuevo correo:", usuario.correo);
    const nuevaClave = prompt("Nueva contraseña:", usuario.contraseña);

    if (nuevoNombre && nuevoCorreo && nuevaClave) {
        usuarios[index] = {
            nombre: nuevoNombre,
            correo: nuevoCorreo,
            contraseña: nuevaClave
        };

        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mostrarUsuarios();
        alert("Usuario actualizado con éxito ✅");
    }
}

// Eliminar usuario
function eliminarUsuario(index) {
    if (confirm("¿Seguro que deseas eliminar este usuario?")) {
        usuarios.splice(index, 1); // quitar usuario
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mostrarUsuarios();
    }
}

// Inicializar tabla al cargar
mostrarUsuarios();

// Botón ➕ Nuevo Usuario
const btnNuevo = document.getElementById('btn-nuevo');
btnNuevo.addEventListener('click', () => {
    window.location.href = "newUsuario/newUsuario.html";
});
