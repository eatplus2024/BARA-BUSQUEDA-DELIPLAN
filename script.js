async function searchImages() {
    const query = document.getElementById('searchQuery').value;
    if (query) {
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=YOUR_ACCESS_KEY`);
            const data = await response.json();
            displayImages(data.results);
        } catch (error) {
            console.error("Error fetching images:", error);
            alert("Hubo un error al obtener las imágenes. Por favor, intenta de nuevo.");
        }
    } else {
        alert("Por favor, ingresa una palabra clave.");
    }
}

function displayImages(images) {
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = '';

    if (images.length === 0) {
        imageResults.innerHTML = '<p>No se encontraron imágenes.</p>';
        return;
    }

    images.forEach(image => {
        const imgElement = document.createElement('a');
        imgElement.href = image.links.html;
        imgElement.target = '_blank';
        imgElement.rel = 'noopener noreferrer';
        imgElement.innerHTML = `<img src="${image.urls.thumb}" alt="${image.alt_description || 'Imagen'}">`;
        imageResults.appendChild(imgElement);
    });
}
