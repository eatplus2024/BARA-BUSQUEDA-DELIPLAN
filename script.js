const images = [
    { src: "image1.jpg", alt: "Image 1", category: "Nature" },
    { src: "image2.jpg", alt: "Image 2", category: "Nature" },
    { src: "image3.jpg", alt: "Image 3", category: "Architecture" },
    { src: "image4.jpg", alt: "Image 4", category: "Animals" },
    { src: "image5.jpg", alt: "Image 5", category: "Abstract" },
];

function displayImages(filteredImages) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    const categories = [...new Set(filteredImages.map(image => image.category))];
    categories.forEach(category => {
        const categoryTitle = document.createElement("div");
        categoryTitle.className = "category-title";
        categoryTitle.textContent = category;
        gallery.appendChild(categoryTitle);
        const row = document.createElement("div");
        row.className = "gallery-row";
        filteredImages
            .filter(image => image.category === category)
            .forEach(image => {
                const img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;
                img.title = image.alt;
                row.appendChild(img);
            });
        gallery.appendChild(row);
    });
}

function filterImages() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredImages = images.filter(
        image =>
            image.category.toLowerCase().includes(searchInput) ||
            image.alt.toLowerCase().includes(searchInput)
    );
    displayImages(filteredImages);
}

document.addEventListener("DOMContentLoaded", () => {
    displayImages(images);
});
