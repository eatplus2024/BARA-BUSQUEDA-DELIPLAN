document.getElementById('search-btn').addEventListener('click', function() {
    let query = document.getElementById('search-bar').value.toLowerCase();

    // Lista de botones con sus enlaces y palabras clave
    const botones = [
        {
            nombre: "Veterinaria",
            url: "https://static.wixstatic.com/media/a4f6c8_b726c1f0b550479d96ffae85b8eae399~mv2.png",
            keywords: ["veterinaria", "animales", "mascotas", "perros", "gatos", "veterinario"]
        },
        {
            nombre: "Pañalera",
            url: "https://static.wixstatic.com/media/a4f6c8_89458390b7c9435aa60e8647509318e1~mv2.jpg",
            keywords: ["pañalera", "bebés", "juguetes", "bicicletas", "asientos de auto", "pañales"]
        }
    ];

    // Buscar coincidencias
    let resultados = botones.filter(boton => {
        return boton.keywords.some(keyword => query.includes(keyword));
    });

    // Mostrar resultados
    let resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ""; // Limpiar resultados previos
    if (resultados.length > 0) {
        resultados.forEach(boton => {
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
        resultsContainer.style.display = "block";
    } else {
        resultsContainer.innerHTML = "No se encontraron resultados.";
        resultsContainer.style.display = "block";
    }
});
