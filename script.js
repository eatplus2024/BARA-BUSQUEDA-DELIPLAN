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
        keywords: ["muebles js", "cama", "colchon", "espaldar", "sabana", "tendido", "artesanias", "toldillo", "cuadro", "sofa", "peinador", "nochero", "semanario", "closet", "sala", "comedor"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-8/locales",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_012863f5fa3b4634b17feaae5e57a545~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_012863f5fa3b4634b17feaae5e57a545~mv2.png",
        keywords: ["domiciliario", "domicilio", "comida", "oscar torres"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-6-of-locales-2-1-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8c699bccce5f4ae28c6bee5e6edcb441~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_8c699bccce5f4ae28c6bee5e6edcb441~mv2.png",
        keywords: ["el garcero", "turisticos", "cafe", "restaurante", "doña barbara", "carne", "carta", "turismo", "comida", "almuerzo", "cena", "bar", "domicilio", "garcero"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-soy-picapiedra-1",
    },
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_dc625c62d77f4dc3a53ea6424e7fb309~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_dc625c62d77f4dc3a53ea6424e7fb309~mv2.png",
        keywords: ["palogrande", "taxi", "Taxis", "taxis", "turismo", "piscina", "hotel", "eventos", "sitios turisticos"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-yopo-cheladas",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_88c5de1555be46739f788e56cc4214b0~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_88c5de1555be46739f788e56cc4214b0~mv2.png",
        keywords: ["la esquina del sabor", "comidas rapidas", "carne al barril", "salchipapa", "picadas", "a domicilio", "restaurante", "hamburguesas", "perros"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-barista-coffee-bread-2",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_a671705bf72744889094a0464a51ed17~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_a671705bf72744889094a0464a51ed17~mv2.png",
        keywords: ["le prova burger", "comidas rapidas", "salchipapa", "picadas", "a domicilio", "hamburguesas", "perros"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-plantilla-locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5cb37d55cade473a835b3d4660532060~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_5cb37d55cade473a835b3d4660532060~mv2.png",
        keywords: ["mirador de la virgen", "frutos rojos del casanare", "mango", "frutas", "salpicon", "piña", "helados", "a domicilio", "turismo", "sitios turisticos", "mirador"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-palogrande-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5cb37d55cade473a835b3d4660532060~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_5cb37d55cade473a835b3d4660532060~mv2.png",
        keywords: ["deluxe terraza", "deluz", "delus", "comidas rapidas", "helados", "salchipapa", "picadas", "a domicilio", "restaurante", "hamburguesas", "perros"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-aldin%C3%AD-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_90ada120ace44d41a8b5b66520e439d0~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_90ada120ace44d41a8b5b66520e439d0~mv2.png",
        keywords: ["ayl extintores y dotaciones", "recarga", "uniformes", "botas", "cascos", "construcción", "seguridad", "señalizacion", "guantes", "gafas", "botiquin", "kit de carreteras", "carros", "elementos", "compañia"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-5/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_cd3d69d08aba49eea9767bf866abed2c~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_cd3d69d08aba49eea9767bf866abed2c~mv2.png",
        keywords: ["Hamburguesas del llano", "comidas rapidas", "helados", "salchipapa", "picadas", "a domicilio", "hamburguesas", "perros"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-do%C3%B1a-barbara",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_a7cc18ce18314b4bbb1fc447d4350a20~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_a7cc18ce18314b4bbb1fc447d4350a20~mv2.png",
        keywords: ["acarreos en motocarro", "carromoto", "trasteos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-2-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_ecffb5f9b02e40778f80183c23f50292~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_ecffb5f9b02e40778f80183c23f50292~mv2.png",
        keywords: ["agua 0.00", "cero", "botellon", "agua potable", "tratada"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-9/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_cd33a3b65aaa47dc9ec0a36dc54405af~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_cd33a3b65aaa47dc9ec0a36dc54405af~mv2.png",
        keywords: ["autolujos el mono", "lujos", "accesorios para carro", "luces", "repuestos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-9-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9b95581373a24747878179fd0e393b11~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_9b95581373a24747878179fd0e393b11~mv2.png",
        keywords: ["buñuelo express", "empanadas", "pandebono", "caldo", "comidas rapidas", "jugos naturales", "cohinitos", "a domicilio"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-le-prova-burguer-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_2ae60fb9b03d41bfbbe296b993c885aa~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_2ae60fb9b03d41bfbbe296b993c885aa~mv2.png",
        keywords: ["brisa del llano", "comidas rapidas", "carne asada", "salchipapa", "picadas", "a la llanera", "restaurante", "hamburguesas", "perros", "a domicilio", "turismo", "tinto", "cafe", "jugos", "micheladas", "churrazco", "mayas catamaran", "mallas", "mirador", "sitios turisticos"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-riki-pollo",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_7f4fbf7ee449462da5ad796ae0354399~mv2.png/v1/fill/w_560,h_279,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_7f4fbf7ee449462da5ad796ae0354399~mv2.png",
        keywords: ["pañalera camaritas", "coche", "caminador", "para niño", "para niña", "caminador", "orinal", "ropa", "zapatos", "maternidad", "lactancia", "juguetes", "bebe"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-7-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_d5f36e54d68f4a72bc52113ad2456d08~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_d5f36e54d68f4a72bc52113ad2456d08~mv2.png",
        keywords: ["carlitos.net", "papeleria", "copias", "impresiones", "utiles", "escolar", "colegio", "recargas", "peluches", "para mujer", "llaveros", "accesorios", "auriculares", "audifonos", "cargadores", "para celular"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_2c341ca0080d406a942c2ce5c110f105~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_2c341ca0080d406a942c2ce5c110f105~mv2.png",
        keywords: ["coltoldillos", "toldillos", "cortinas", "persianas", "percianas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-6-of-locales-2-2-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_83c8d1e56e05467e8c12916dfcb2d49c~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_83c8d1e56e05467e8c12916dfcb2d49c~mv2.png",
        keywords: ["decorplass", "decoracion", "remodelar", "materiales", "construcción", "acabados", "cerrageria", "puerta", "vidrios", "adecuacion"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-14-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5cdb359ec67943dc8e0bcc4f4fb312a8~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_5cdb359ec67943dc8e0bcc4f4fb312a8~mv2.png",
        keywords: ["distrillaves", "copia de llaves", "cerrajeria", "cerrajero", "chapas", "llaves", "puerta"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-7-of-locales-2-2-2-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5cdb359ec67943dc8e0bcc4f4fb312a8~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_5cdb359ec67943dc8e0bcc4f4fb312a8~mv2.png",
        keywords: ["d´lokos", "dlokos", "comidas rapidas", "salchipapa", "picadas", "hamburguesas", "perros", "a domicilio"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-la-esquina-del-sabor-2",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9fcc4c68f1664f2ebad4c15ee0bf64c8~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_9fcc4c68f1664f2ebad4c15ee0bf64c8~mv2.png",
        keywords: ["domidani", "domicilio", "comidas rapidas", "salchipapa", "picadas", "hamburguesas", "perros", "a domicilio", "domiciliario"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-4-of-locales-2-1-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_af96e3a54c2140f0a1104de0c8c6b093~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_af96e3a54c2140f0a1104de0c8c6b093~mv2.png",
        keywords: ["donde pacho", "camisetas", "sudaderas", "pantalonetas", "balones", "peluches", "accesorios", "deporte"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-6/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_84ee5aa5ce3c4789917058d7e9b991f0~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_84ee5aa5ce3c4789917058d7e9b991f0~mv2.png",
        keywords: ["Dsysk celulares", "accesorios para celular", "fundas", "estuches", "antichoques", "cargador", "audifonos", "diadema", "speaker", "altavoz", "altavoces", "mouse", "teclado", "vidrios para telefono", "control", "gamepad", "mando", "gamer", "servicio tecnico"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-14/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9d81a4c5f09c477cb61929bc25e359af~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_9d81a4c5f09c477cb61929bc25e359af~mv2.png",
        keywords: ["el girasol", "tienda naturista", "natural", "productos naturales", "midicina", "medicamentos", "purgante", "potencializador"],
        link: "https://eatcomercial01.wixsite.com/website-1/locales/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_39917a957b714fa3aad989ff062ae9ed~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_39917a957b714fa3aad989ff062ae9ed~mv2.png",
        keywords: ["el rico sabor", "agua potable", "a domicilio", "botellon", "bolsa", "hielo", "saborizada", "refrescos", "bolis", "pura", "tratada"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-9/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_0e018eba56ea48dc9516d722e28c9bf0~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_0e018eba56ea48dc9516d722e28c9bf0~mv2.png",
        keywords: ["el viejo oeste de la pizza", "pizza", "pizzeria", "a domicilio"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-matilde",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_debce199ddcf496980f9db70f9f05b3c~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_debce199ddcf496980f9db70f9f05b3c~mv2.png",
        keywords: ["floristeria enamorate", "flores", "detalles", "regalos", "peluches", "flores", "matrimonio", "eventos", "arreglos", "decoracion", "fiestas", "15 años", "ramos", "para cepelio"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-8-of-locales-2-1-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5f8b560f72f14bbfa55427111c3e9356~mv2.png/v1/fill/w_560,h_278,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_5f8b560f72f14bbfa55427111c3e9356~mv2.png",
        keywords: ["la casa de la energia solar", "energia solar", "paneles", "bombas", "neveras", "congeladores", "baterias", "inversores", "reguladores", "impulsores", "cercas electricas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-4/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_acdf01e283be400f83b3ce037a2a93e8~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_acdf01e283be400f83b3ce037a2a93e8~mv2.png",
        keywords: ["estacion crochet", "yohana gonzalez", "bolsos", "manualidades", "insumos para tejeduria", "distribuidora", "trapillo", "tejido", "talleres"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-5-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_4bcccd598ee7498da97ccbd575eba3ba~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_4bcccd598ee7498da97ccbd575eba3ba~mv2.png",
        keywords: ["estilo y confort", "muebles", "cama", "colchon", "espaldar", "sabana", "tendido", "artesanias", "toldillo", "cuadro", "sofa", "peinador", "nochero", "semanario", "closet", "sala", "comedor"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-6-of-locales-2-2-2-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_055e14a66020426e99a320a9474dc334~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_055e14a66020426e99a320a9474dc334~mv2.png",
        keywords: ["ferreruedas", "ferreteria", "rodachinas", "tornillos", "discos", "silicona", "pulidora"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-7/locales",
    },
];

// Normalizar cadenas para ignorar mayúsculas, tildes y diacríticos
function normalizeString(str) {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// Mostrar u ocultar el indicador de carga
function toggleLoadingIndicator(show) {
    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = show ? "flex" : "none";
}

// Mostrar imágenes en la galería (coincidencias exactas y parciales)
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
        const separator = document.createElement("hr");
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

    toggleLoadingIndicator(true); // Mostrar indicador de carga

    setTimeout(() => {
        const filteredImages = [];
        const partialMatches = [];

        images.forEach((image) => {
            const normalizedKeywords = image.keywords.map(normalizeString);

            if (normalizedKeywords.some((keyword) => keyword.includes(query))) {
                filteredImages.push(image);
            } else {
                const words = query.split(" ");
                const matches = words.filter((word) =>
                    normalizedKeywords.some((keyword) => keyword.includes(word))
                );

                if (matches.length > 0) {
                    partialMatches.push({ image, matches });
                }
            }
        });

        displayImages(filteredImages, partialMatches);
        toggleLoadingIndicator(false); // Ocultar indicador de carga
    }, 1000); // Simular retraso de búsqueda
}

// Restaurar la galería a su estado inicial (sin imágenes)
function resetGallery() {
    document.getElementById("searchInput").value = "";
    document.getElementById("gallery").innerHTML =
        "<p>Usa la barra de búsqueda para ver imágenes.</p>";
}

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

        #loading-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            color: #00ffcc;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            flex-direction: column;
        }

        .spinner {
            border: 8px solid rgba(0, 255, 204, 0.3);
            border-top: 8px solid #00ffcc;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loading-text {
            margin-top: 15px;
            font-size: 18px;
        }
    `;
}

// Inicializar la aplicación
window.onload = () => {
    applyDynamicStyles();
    resetGallery();
    autoFocusSearchInput();
};
