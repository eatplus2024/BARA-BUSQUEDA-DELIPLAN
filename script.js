const categories = {
    food: [
        { url: 'https://via.placeholder.com/300?text=Food+1', link: 'https://example.com/food1' },
        { url: 'https://via.placeholder.com/300?text=Food+2', link: 'https://example.com/food2' },
        { url: 'https://via.placeholder.com/300?text=Food+3', link: 'https://example.com/food3' },
    ],
    water: [
        { url: 'https://via.placeholder.com/300?text=Water+1', link: 'https://example.com/water1' },
        { url: 'https://via.placeholder.com/300?text=Water+2', link: 'https://example.com/water2' },
        { url: 'https://via.placeholder.com/300?text=Water+3', link: 'https://example.com/water3' },
    ],
    nature: [
        { url: 'https://via.placeholder.com/300?text=Nature+1', link: 'https://example.com/nature1' },
        { url: 'https://via.placeholder.com/300?text=Nature+2', link: 'https://example.com/nature2' },
        { url: 'https://via.placeholder.com/300?text=Nature+3', link: 'https://example.com/nature3' },
    ],
};

function loadImages() {
    Object.keys(categories).forEach(category => {
        const gallery = document.getElementById(`${category}-gallery`);
        categories[category].forEach(item => {
            const img = document.createElement('img');
            img.src = item.url;
            img.alt = category;
            img.onclick = () => window.open(item.link, '_blank');
            gallery.appendChild(img);
        });
    });
}

function filterImages() {
    const query = document.getElementById('search-input').value.toLowerCase();
    Object.keys(categories).forEach(category => {
        const gallery = document.getElementById(`${category}-gallery`);
        const images = gallery.querySelectorAll('img');
        images.forEach(img => {
            const match = categories[category].some(
                item => item.url.includes(query) || item.link.includes(query)
            );
            img.style.display = match ? 'block' : 'none';
        });
    });
}

document.getElementById('search-button').addEventListener('click', filterImages);
window.onload = loadImages;
