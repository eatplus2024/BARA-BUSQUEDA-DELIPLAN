// Detectar dispositivo móvil y enfocar automáticamente el campo de búsqueda
function autoFocusSearchInput() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const searchInput = document.getElementById("searchInput");

    if (isMobile && searchInput) {
        searchInput.focus();
    }
}

const images = [
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_f9c96ee36ee747a2a8e8da2d1ec9b0a1~mv2.png",
        keywords: ["taxi", "Taxis", "taxis"],
        link: "https://eatcomercial01.wixsite.com/website-1/turitaxis",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_04ad6e3130d04f4dada287584d18cf01~mv2.png",
        keywords: ["muebles", "cama", "colchon"],
        link: "https://unsplash.com/",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_012863f5fa3b4634b17feaae5e57a545~mv2.png",
        keywords: ["domiciliario", "domicilio", "comida"],
        link: "https://unsplash.com/",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8c699bccce5f4ae28c6bee5e6edcb441~mv2.png",
        keywords: ["turisticos", "cafe", "restaurante"],
        link: "https://unsplash.com/",
    },
];

// Función para normalizar cadenas (ignorar mayúsculas, tildes, etc.)
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD") // Descomponer caracteres acentuados
        .replace(/[\u0300-\u036f]/g, ""); // Eliminar diacríticos
}

// Mostrar imágenes en la galería
function displayImages(filteredImages, partialMatches = []) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (filteredImages.length === 0 && partialMatches.length === 0) {
        gallery.innerHTML = "<p>No hay resultados relacionados.</p>";
        return;
    }

    if (filteredImages.length > 0) {
        const exactTitle = document.createElement("h3");
        exactTitle.textContent = "Resultados principales:";
        gallery.appendChild(exactTitle);

        filteredImages.forEach((image) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.target = "_blank";

            const img = document.createElement("img");
            img.src = image.url;
            img.alt = image.keywords.join(", ");

            anchor.appendChild(img);
            gallery.appendChild(anchor);
        });
    }

    if (partialMatches.length > 0) {
        const separator = document.createElement("hr"); // Línea separadora
        gallery.appendChild(separator);

        const partialTitle = document.createElement("h3");
        partialTitle.textContent = "Coincidencias relacionadas:";
        gallery.appendChild(partialTitle);

        partialMatches.forEach(({ image, matches }) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.target = "_blank";

            const img = document.createElement("img");
            img.src = image.url;
            img.alt = image.keywords.join(", ");

            anchor.appendChild(img);
            gallery.appendChild(anchor);

            // Mostrar palabras coincidentes debajo de cada imagen
            const matchesText = document.createElement("p");
            matchesText.textContent = `Palabras relacionadas: ${matches.join(", ")}`;
            matchesText.style.fontSize = "12px";
            matchesText.style.color = "#555";
            gallery.appendChild(matchesText);
        });
    }
}

// Buscar imágenes con coincidencias avanzadas
function searchImages() {
    const query = normalizeString(document.getElementById("searchInput").value.trim());
    if (!query) {
        alert("Escribe aquí lo que buscas.");
        return;
    }

    const filteredImages = [];
    const partialMatches = [];

    images.forEach((image) => {
        const normalizedKeywords = image.keywords.map(normalizeString);

        // Coincidencias exactas o parciales
        if (normalizedKeywords.some((keyword) => keyword.includes(query))) {
            filteredImages.push(image);
        } else {
            // Coincidencias parciales con palabras individuales
            const words = query.split(" ");
            const matches = words.filter((word) =>
                normalizedKeywords.some((keyword) => keyword.includes(word))
            );

            if (matches.length > 0) {
                partialMatches.push({ image, matches });
            }
        }
    });

    // Mostrar imágenes
    displayImages(filteredImages, partialMatches);
}

// Restaurar la galería a su estado inicial
function resetGallery() {
    document.getElementById("searchInput").value = "";
    document.getElementById("gallery").innerHTML =
        "<p>Usa la barra de búsqueda para encontrar el producto, servicio o establecimiento que necesites.</p>";
}

// Aplicar estilos dinámicos
function applyDynamicStyles() {
    const styleElement = document.getElementById("dynamic-style");
    styleElement.textContent = `
        /* Tus estilos aquí */
    `;
}

// Inicializar la aplicación
window.onload = () => {
    applyDynamicStyles();
    resetGallery();
    autoFocusSearchInput();
};
