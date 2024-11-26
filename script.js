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
            keywords: ["muebles", "cama", "basecama", "colchón", "colchon", "colchoneta", "cabecera", "closet", "sofa", "nochero", "semanario", "peinador", "sala", "comedor", "tendido", "forro", "edredón", "edredon", "sábana", "sabana", "almohada", "toldillos", "artesanías", "artesanias", "cuadro"],
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
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
        }

        #main-title {
            color: #444;
            font-size: 28px;
            margin: 20px 0;
        }

        .search-container {
            margin: 20px auto;
            width: 90%;
            max-width: 600px;
        }

        #search-wrapper {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 10px;
        }

        #searchInput {
            flex: 1;
            padding: 15px 20px;
            font-size: 18px;
            border: 2px solid #00ffcc;
            border-radius: 25px;
            outline: none;
            background: #fff;
            color: #333;
            transition: box-shadow 0.3s ease;
        }

        #searchInput:focus {
            box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
        }

        #resetBtn {
            position: absolute;
            right: 10px;
            background: none;
            border: none;
            color: #00ffcc;
            font-size: 18px;
            cursor: pointer;
            outline: none;
        }

        #resetBtn:hover {
            color: #007f66;
        }

        .search-container button {
            background-color: #00ffcc;
            border: none;
            border-radius: 25px;
            padding: 12px 20px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .search-container button:hover {
            background-color: #007f66;
            transform: scale(1.05);
        }

        #gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 30px auto;
            width: 90%;
        }

        #gallery img {
            max-width: 150px;
            height: auto;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        #gallery img:hover {
            transform: scale(1.1);
            box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
        }

        footer {
            background-color: #111;
            color: #00ffcc;
            padding: 10px;
            font-size: 14px;
            text-align: center;
        }
    `;
}

// Mostrar imágenes en la galería (solo las que coincidan)
function displayImages(imageList) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (imageList.length === 0) {
        gallery.innerHTML = "<p>No hay resultados relacionados.</p>";
        return;
    }

    imageList.forEach((image) => {
        const anchor = document.createElement("a");
        anchor.href = image.link;
        anchor.target = "_blank";

        const img = document.createElement("img");
        img.src = image.url; // Solo cargar cuando se encuentra
        img.alt = image.keywords.join(", ");

        anchor.appendChild(img);
        gallery.appendChild(anchor);
    });
}

// Buscar imágenes solo cuando se haga una consulta
function searchImages() {
    const query = document.getElementById("searchInput").value.toLowerCase().trim();
    if (!query) {
        alert("Escribe aquí lo que buscas.");
        return;
    }

    // Función para normalizar cadenas (elimina tildes y diferencias en mayúsculas/minúsculas)
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD") // Descomponer caracteres acentuados
        .replace(/[\u0300-\u036f]/g, ""); // Eliminar los caracteres diacríticos
}

// Función para buscar coincidencias aproximadas
function searchImages() {
    const query = normalizeString(document.getElementById("searchInput").value.trim());
    if (!query) {
        alert("Escribe aquí lo que buscas.");
        return;
    }

    const filteredImages = [];
    const partialMatches = [];

    // Buscar coincidencias exactas y parciales
    images.forEach((image) => {
        const normalizedKeywords = image.keywords.map((keyword) => normalizeString(keyword));

        // Coincidencias exactas o parciales
        const matches = normalizedKeywords.filter((keyword) =>
            keyword.includes(query) || query.includes(keyword)
        );

        if (matches.length > 0) {
            filteredImages.push({ image, matches });
        } else {
            // Coincidencias parciales de palabras individuales
            const phraseWords = query.split(" "); // Dividir la frase en palabras
            const partialWordMatches = phraseWords.filter((word) =>
                normalizedKeywords.some((keyword) => keyword.includes(word))
            );

            if (partialWordMatches.length > 0) {
                partialMatches.push({ image, partialWordMatches });
            }
        }
    });

    // Mostrar resultados
    displayImages(filteredImages, partialMatches);
}

// Función para mostrar imágenes y coincidencias parciales
function displayImages(filteredImages, partialMatches) {
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

        filteredImages.forEach(({ image }) => {
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
        partialTitle.textContent = "Coincidencias en palabras relacionadas:";
        gallery.appendChild(partialTitle);

        partialMatches.forEach(({ image, partialWordMatches }) => {
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
            matchesText.textContent = `Palabras relacionadas: ${partialWordMatches.join(", ")}`;
            matchesText.style.fontSize = "12px";
            matchesText.style.color = "#555";
            gallery.appendChild(matchesText);
        });
    }
}
    displayImages(filteredImages);
}

// Restaurar la galería a su estado inicial (sin imágenes)
function resetGallery() {
    document.getElementById("searchInput").value = "";
    document.getElementById("gallery").innerHTML = "<p>Usa la barra de búsqueda para encontrar el producto, servicico o establecimiento que necesites.</p>";
}

// Inicializar la aplicación
window.onload = () => {
    applyDynamicStyles();
    resetGallery(); // No cargar imágenes al inicio
    autoFocusSearchInput();
};
