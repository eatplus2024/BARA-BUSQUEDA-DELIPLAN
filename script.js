// Definir categorías e imágenes
const categories = {
    Comidas: [
        { title: "Pizza", src: "https://source.unsplash.com/300x200/?pizza" },
        { title: "Hamburguesa", src: "https://source.unsplash.com/300x200/?burger" },
        { title: "Postre", src: "https://source.unsplash.com/300x200/?dessert" }
    ],
    Agua: [
        { title: "Lago", src: "https://source.unsplash.com/300x200/?lake" },
        { title: "Río", src: "https://source.unsplash.com/300x200/?river" },
        { title: "Océano", src: "https://source.unsplash.com/300x200/?ocean" }
    ],
    Naturaleza: [
        { title: "Bosque", src: "https://source.unsplash.com/300x200/?forest" },
        { title: "Montañas", src: "https://source.unsplash.com/300x200/?mountains" },
        { title: "Playa", src: "https://source.unsplash.com/300x200/?beach" }
    ]
};

// Función para cargar categorías e imágenes
function loadGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Limpiar contenido previo

    Object.keys(categories).forEach(category => {
        // Crear contenedor de categoría
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("category");

        // Agregar título de categoría
        const title = document.createElement("h2");
        title.textContent = category;
        categoryContainer.appendChild(title);

        // Crear contenedor de imágenes
        const imageGrid = document.createElement("div");
        imageGrid.classList.add("image-grid");

        // Agregar imágenes
        categories[category].forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = image.src;
            imgElement.alt = image.title;
            imgElement.title = image.title;
            imageGrid.appendChild(imgElement);
        });

        categoryContainer.appendChild(imageGrid);
        gallery.appendChild(categoryContainer);
    });
}

// Función para filtrar imágenes
function filterImages() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Limpiar contenido previo

    Object.keys(categories).forEach(category => {
        // Verificar si el nombre de la categoría o las imágenes coinciden con la búsqueda
        const matchingImages = categories[category].filter(image =>
            category.toLowerCase().includes(query) || image.title.toLowerCase().includes(query)
        );

        if (matchingImages.length > 0) {
            const categoryContainer = document.createElement("div");
            categoryContainer.classList.add("category");

            const title = document.createElement("h2");
            title.textContent = category;
            categoryContainer.appendChild(title);

            const imageGrid = document.createElement("div");
            imageGrid.classList.add("image-grid");

            matchingImages.forEach(image => {
                const imgElement = document.createElement("img");
                imgElement.src = image.src;
                imgElement.alt = image.title;
                imgElement.title = image.title;
                imageGrid.appendChild(imgElement);
            });

            categoryContainer.appendChild(imageGrid);
            gallery.appendChild(categoryContainer);
        }
    });

    if (gallery.innerHTML === "") {
        gallery.innerHTML = "<p>No se encontraron resultados.</p>";
    }
}

// Cargar la galería al iniciar
window.onload = loadGallery;
