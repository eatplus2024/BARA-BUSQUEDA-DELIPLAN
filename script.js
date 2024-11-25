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

// Aplicar estilos dinámicos
function applyDynamicStyles() {
    const styleElement = document.getElementById("dynamic-style");
    styleElement.textContent = `
        body { ... } /* El contenido del estilo se mantiene igual */
    `;
}

// Mostrar imágenes en la galería
function displayImages(imageList) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (imageList.length === 0) {
        gallery.innerHTML = "<p>No hay resultados relacionados.</p>";
        return;
    }

    const uniqueImages = Array.from(new Set(imageList.map((img) => img.url)))
        .map((url) => imageList.find((img) => img.url === url));

    uniqueImages.forEach((image) => {
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

// Filtrar imágenes según las palabras clave
function searchImages() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (!query) {
        alert("Escribe aquí lo que buscas.");
        return;
    }

    // Filtrar imágenes por coincidencia parcial en las palabras clave
    const filteredImages = images.filter((image) =>
        image.keywords.some((keyword) =>
            keyword.toLowerCase().includes(query)
        )
    );

    displayImages(filteredImages);
}

// Restaurar galería a su estado inicial
function resetGallery() {
    document.getElementById("searchInput").value = "";
    displayImages(images);
}

// Inicializar la aplicación
window.onload = () => {
    applyDynamicStyles();
    displayImages(images);
    autoFocusSearchInput();
};
