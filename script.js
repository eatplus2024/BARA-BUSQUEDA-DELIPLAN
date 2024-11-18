document.addEventListener('DOMContentLoaded', function() {
    // Definir las URLs de las imágenes para cada categoría
    const imageCategories = {
        comidas: [
            'https://https://scontent.fpei2-2.fna.fbcdn.net/v/t39.30808-6/458443323_122169025856057167_603861249333375414_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7pTjrEynWekQ7kNvgHL526-&_nc_zt=23&_nc_ht=scontent.fpei2-2.fna&_nc_gid=AlpzFQGydVpinmK_HgARH5E&oh=00_AYBOBavwAB37HR8TbVpE3eL5VwxplQNnfmgUrb_S1shGVw&oe=674064C0',
            'https://scontent.fpei2-2.fna.fbcdn.net/v/t39.30808-6/453382218_122163348380057167_4215641678086304413_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S1ocyhFHJKgQ7kNvgHZf7rH&_nc_zt=23&_nc_ht=scontent.fpei2-2.fna&_nc_gid=ABsvLsR3yTvSjU4bda7xHfx&oh=00_AYBdOxh_2vjdYkb1bPWVl1iDbdbH_CXv2fkIR0VRuKJ4qA&oe=67404E6B',
            'https://scontent.fpei2-1.fna.fbcdn.net/v/t39.30808-6/411175490_122126727422057167_7459858587137417652_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-CsqpsSqk7YQ7kNvgE7-VoC&_nc_zt=23&_nc_ht=scontent.fpei2-1.fna&_nc_gid=AtGEibUMIS0IseG9Afe11eK&oh=00_AYCIjil-udACIRnMbVjzgxIRJ9llIIcHKDv5DtqjVLjonA&oe=674076A8'
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
