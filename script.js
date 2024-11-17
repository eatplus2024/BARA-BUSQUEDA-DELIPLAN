const images = {
    Nature: [
        { src: "https://scontent.fpei2-2.fna.fbcdn.net/v/t39.30808-6/467370816_1103581135107141_3831666806524366531_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9xBrbr8OlFYQ7kNvgFVnRWX&_nc_zt=23&_nc_ht=scontent.fpei2-2.fna&_nc_gid=AeyvP-tFAU5zijSDC8PFR9A&oh=00_AYAklQbaC1nOzZlsMi_SXSaLOmwOgqubKZgdB6SOnNSUyA&oe=67402FEE", alt: "Forest" },
        { src: "https://www.facebook.com/photo?fbid=1103581101773811&set=pcb.1103581125107142", alt: "Waterfall" },
        { src: "https://source.unsplash.com/300x200/?nature,mountains", alt: "Mountains" },
    ],
    Food: [
        { src: "https://source.unsplash.com/300x200/?food,burger", alt: "Burger" },
        { src: "https://source.unsplash.com/300x200/?food,pizza", alt: "Pizza" },
        { src: "https://source.unsplash.com/300x200/?food,salad", alt: "Salad" },
    ],
    Animals: [
        { src: "https://source.unsplash.com/300x200/?animals,dog", alt: "Dog" },
        { src: "https://source.unsplash.com/300x200/?animals,cat", alt: "Cat" },
        { src: "https://source.unsplash.com/300x200/?animals,elephant", alt: "Elephant" },
    ]
};

function loadGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    Object.keys(images).forEach(category => {
        const categoryTitle = document.createElement("div");
        categoryTitle.className = "category-title";
        categoryTitle.textContent = category;
        gallery.appendChild(categoryTitle);

        const row = document.createElement("div");
        row.className = "gallery-row";
        images[category].forEach(image => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            row.appendChild(img);
        });
        gallery.appendChild(row);
    });
}

function filterImages() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredImages = {};
    Object.keys(images).forEach(category => {
        const matchingImages = images[category].filter(image =>
            image.alt.toLowerCase().includes(query) || category.toLowerCase().includes(query)
        );
        if (matchingImages.length > 0) {
            filteredImages[category] = matchingImages;
        }
    });

    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    if (Object.keys(filteredImages).length > 0) {
        Object.keys(filteredImages).forEach(category => {
            const categoryTitle = document.createElement("div");
            categoryTitle.className = "category-title";
            categoryTitle.textContent = category;
            gallery.appendChild(categoryTitle);

            const row = document.createElement("div");
            row.className = "gallery-row";
            filteredImages[category].forEach(image => {
                const img = document.createElement("img");
                img.src = image.src;
                img.alt = image.alt;
                row.appendChild(img);
            });
            gallery.appendChild(row);
        });
    } else {
        gallery.innerHTML = "<p>No results found.</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadGallery);
