// Datos de imágenes por categoría
const images = {
    comidas: [
        { src: "https://source.unsplash.com/300x200/?food", link: "https://unsplash.com/s/photos/food" },
        { src: "https://source.unsplash.com/300x200/?pizza", link: "https://unsplash.com/s/photos/pizza" },
        { src: "https://source.unsplash.com/300x200/?burger", link: "https://unsplash.com/s/photos/burger" }
    ],
    agua: [
        { src: "https://source.unsplash.com/300x200/?water", link: "https://unsplash.com/s/photos/water" },
        { src: "https://source.unsplash.com/300x200/?river", link: "https://unsplash.com/s/photos/river" },
        { src: "https://source.unsplash.com/300x200/?lake", link: "https://unsplash.com/s/photos/lake" }
    ],
    naturaleza: [
        { src: "https://source.unsplash.com/300x200/?nature", link: "https://unsplash.com/s/photos/nature" },
        { src: "https://source.unsplash.com/300x200/?forest", link: "https://unsplash.com/s/photos/forest" },
        { src: "https://source.unsplash.com/300x200/?mountains", link: "https://unsplash.com/s/photos/mountains" }
    ]
};

// Función para cargar imágenes en el HTML
function loadImages() {
    Object.keys(images).forEach(category => {
        const container = document.getElementById(category);
        images[category].forEach(image => {
            const imgElement = document.createElement("a");
            imgElement.href = image.link;
            imgElement.target = "_blank";
            imgElement.innerHTML = `<img src="${image.src}" alt="${category}">`;
            container.appendChild(imgElement);
        });
    });
}

// Función de búsqueda (filtra por título de categoría)
function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    document.querySelectorAll(".category").forEach(section => {
        const title = section.querySelector("h2").textContent.toLowerCase();
        section.style.display = title.includes(query) ? "block" : "none";
    });
}

// Cargar las imágenes al iniciar la página
window.onload = loadImages;
