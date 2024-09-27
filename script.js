document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('search-bar').value.toLowerCase();

    // Mostrar un mensaje de carga mientras se hace la búsqueda
    let resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = "Buscando...";
    resultsContainer.style.display = "block";

    fetch(`https://fantasy-persistent-salmonberry.glitch.me/search?q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return response.json();
        })
        .then(data => {
            resultsContainer.innerHTML = ""; // Limpiar resultados previos
            data.forEach(boton => {
                let buttonElement = document.createElement('img');
                buttonElement.src = boton.url;
                buttonElement.alt = boton.nombre;
                buttonElement.style.width = "200px";
                buttonElement.style.cursor = "pointer";
                buttonElement.addEventListener('click', function() {
                    window.location.href = boton.url;
                });
                resultsContainer.appendChild(buttonElement);
            });
        })
        .catch(error => {
            resultsContainer.innerHTML = "No se encontraron resultados o error en la búsqueda.";
        });
});
