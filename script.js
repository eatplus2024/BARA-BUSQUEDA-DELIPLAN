const imageLinks = {
    comidas: [
        "https://w7.pngwing.com/pngs/195/337/png-transparent-three-dimensional-square-background-texture-angle-other-thumbnail.png",
        "https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text-thumbnail.png",
        "https://w7.pngwing.com/pngs/820/953/png-transparent-love-hearts-love-hearts-red-heart-love-heart-computer-icons-thumbnail.png"
    ],
    agua: [
        "https://w7.pngwing.com/pngs/922/489/png-transparent-whatsapp-icon-logo-whatsapp-logo-text-trademark-grass-thumbnail.png",
        "https://w7.pngwing.com/pngs/664/799/png-transparent-paper-creative-tearing-paper-background-black-border-template-angle-white-rectangle-thumbnail.png",
        "https://w7.pngwing.com/pngs/814/840/png-transparent-tiktok-tiktok-logo-tiktok-icon-thumbnail.png"
    ],
    naturaleza: [
        "https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png",
        "https://w7.pngwing.com/pngs/972/320/png-transparent-speech-balloon-comics-illustration-cartoon-explosion-effects-border-black-and-yellow-speech-balloon-template-border-cartoon-character-white-thumbnail.png",
        "https://w7.pngwing.com/pngs/752/373/png-transparent-computer-icons-facebook-logo-facebook-logo-fine-art-thumbnail.png"
    ]
};

function loadImages() {
    for (const category in imageLinks) {
        const container = document.getElementById(category);
        imageLinks[category].forEach(link => {
            const img = document.createElement("img");
            img.src = link;
            container.appendChild(img);
        });
    }
}

document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchBar").value.toLowerCase();
    for (const category in imageLinks) {
        const container = document.getElementById(category);
        container.innerHTML = ""; // Clear current images
        imageLinks[category].forEach(link => {
            if (link.toLowerCase().includes(query)) {
                const img = document.createElement("img");
                img.src = link;
                container.appendChild(img);
            }
        });
    }
});

window.onload = loadImages;
