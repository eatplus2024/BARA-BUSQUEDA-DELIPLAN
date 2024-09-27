// Detectar el clic en el botón de búsqueda
document.getElementById('btnBuscar').addEventListener('click', function() {
  const consulta = document.getElementById('busqueda').value.trim().toLowerCase();
  if (consulta) {
    buscarEstablecimientos(consulta);
  }
});

// Función para hacer la búsqueda en el backend de Glitch
function buscarEstablecimientos(consulta) {
  // Realiza una solicitud al servidor Glitch
  fetch(`https://tu-glitch-project-url.glitch.me/buscar?q=${consulta}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('No se encontraron resultados');
      }
    })
    .then(resultados => {
      mostrarResultados(resultados);
    })
    .catch(error => {
      mostrarError(error.message);
    });
}

// Función para mostrar los resultados en el tablero
function mostrarResultados(resultados) {
  const contenedor = document.getElementById('resultados');
  contenedor.innerHTML = ''; // Limpiar resultados anteriores
  contenedor.style.display = 'block'; // Mostrar el tablero

  resultados.forEach(boton => {
    const botonHTML = `
      <div class="resultado">
        <a href="${boton.link}" target="_blank">
          <img src="${boton.url}" alt="${boton.nombre}">
        </a>
      </div>
    `;
    contenedor.innerHTML += botonHTML;
  });
}

// Función para mostrar un error si no se encuentran resultados
function mostrarError(mensaje) {
  const contenedor = document.getElementById('resultados');
  contenedor.innerHTML = `<p>${mensaje}</p>`;
  contenedor.style.display = 'block';
}
