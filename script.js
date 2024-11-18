document.addEventListener('DOMContentLoaded', function() {
    // Definir las URLs de las imágenes para cada categoría
    const imageCategories = {
        comidas: [
            'https://www.pngwing.com/es/comidas1.png',
            'https://www.pngwing.com/es/comidas2.png',
            'https://www.pngwing.com/es/comidas3.png'
        ],
        agua: [
            'https://www.pngwing.com/es/agua1.png',
            'https://www.pngwing.com/es/agua2.png',
            'https://www.pngwing.com/es/agua3.png'
        ],
        naturaleza: [
            'https://www.pngwing.com/es/naturaleza1.png',
            'https://www.pngwing.com/es/naturaleza2.png',
            'https://www.pngwing.com/es/naturaleza3.png'
        ]
    };

    // Cargar imágenes dinámicamente en el DOM
    for (const [category, urls] of Object.entries(imageCategories)) {
        const container = document.createElement('div');
        container.classList.add('image-row');

        urls.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Imagen de ${category}`;
            img.classList.add('thumbnail');
            container.appendChild(img);
        });

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = `Categoría: ${category.charAt(0).toUpperCase() + category.slice(1)}`;

        document.querySelector('.main-container').appendChild(categoryTitle);
        document.querySelector('.main-container').appendChild(container);
    }

    // Funcionalidad de búsqueda
    document.getElementById('searchBtn').addEventListener('click', function() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const images = document.querySelectorAll('.thumbnail');
        const categories = document.querySelectorAll('h2');

        let found = false;

        images.forEach(image => {
            const altText = image.alt.toLowerCase();
            if (altText.includes(searchTerm)) {
                image.style.display = 'inline-block';
                found = true;
            } else {
                image.style.display = 'none';
            }
        });

        categories.forEach(category => {
            const imagesInCategory = category.nextElementSibling.querySelectorAll('.thumbnail');
            if (Array.from(imagesInCategory).some(img => img.style.display === 'inline-block')) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });

        if (!found) {
            alert('No se encontraron resultados para tu búsqueda.');
        }
    });
});
