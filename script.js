function buscarEstablecimientos(consulta) {
  fetch(`https://fantasy-persistent-salmonberry.glitch.me/buscar?q=${consulta}`)
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
