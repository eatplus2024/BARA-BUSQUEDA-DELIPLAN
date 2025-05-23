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
        keywords: ["taxi", "Taxis", "taxistas"],
        link: "https://eatcomercial01.wixsite.com/website-1/turitaxis",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_04ad6e3130d04f4dada287584d18cf01~mv2.png",
        keywords: ["muebles js", "distribuidoras", "hogar", "fabrica", "alfombras", "muebles", "camas", "colchones", "espaldares", "sabanas", "tendidos", "artesanias", "toldillos", "cuadros", "sofas", "peinadores", "nocheros", "semanarios", "closets", "salas", "comedores"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-8/locales",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_9f8674dbbac24999942ec3110f632618~mv2.png/v1/fill/w_367,h_321,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_9f8674dbbac24999942ec3110f632618~mv2.png",
        keywords: ["rezio muebles", "recio", "resio", "distribuidoras", "hogar", "fabrica", "muebles", "camas", "colchones", "espaldares", "sofas", "peinadores", "nocheros", "semanarios sillas cillas acientos asientos poltronas", "closets", "salas", "comedores"],
        link: "https://eatcomercial01.wixsite.com/website-1/locales-2/locales",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_012863f5fa3b4634b17feaae5e57a545~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_012863f5fa3b4634b17feaae5e57a545~mv2.png",
        keywords: ["domiciliarios", "domicilios", "comidas", "oscar torres"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-6-of-locales-2-1-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8c699bccce5f4ae28c6bee5e6edcb441~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_8c699bccce5f4ae28c6bee5e6edcb441~mv2.png",
        keywords: ["el garcero", "turisticos", "cafeterias", "restaurantes", "doña barbara", "carne", "carta", "turismo", "comidas", "almuerzos", "cenas", "bares", "domicilios", "el garcero"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-soy-picapiedra-1",
    },
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_dc625c62d77f4dc3a53ea6424e7fb309~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_dc625c62d77f4dc3a53ea6424e7fb309~mv2.png",
        keywords: ["palogrande", "turismo", "piscinas", "hoteles", "eventos", "celebraciones", "sitios turisticos"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-yopo-cheladas",
    },
    {
        id: 2,
        url: "https://static.wixstatic.com/media/a4f6c8_cd96ad0059c745aea5d7827a98b7df43~mv2.png/v1/fill/w_328,h_287,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_cd96ad0059c745aea5d7827a98b7df43~mv2.png",
        keywords: ["papas monkey", "la esquina del sabor", "papas locas", "comidas rapidas", "carne al barril", "salchipapas", "picadas", "a domicilios", "restaurantes", "hamburguesas", "perros calientes", "carnes", "pechuga a la plancha", "churrasco", "gratinada", "res", "cerdo", "carne gulach", "pollo apanado", "milanesa", "Chuleta", "bandeja minipaisa", "mojarra cachama costillitas costillas bbq argentino"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-barista-coffee-bread-2",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_a671705bf72744889094a0464a51ed17~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_a671705bf72744889094a0464a51ed17~mv2.png",
        keywords: ["le prova burger", "comidas rapidas", "salchipapas", "picadas", "a domicilios", "hamburguesas", "perros calientes", "carnes", "churrascos", "pechugas a la plancha gratinadas con champiñones camarones costillitas costillas bbq", "jugos naturales", "citricas en soda sitricas", "naranjadas", "granizados", "gaseosas", "papas francesas crioillas", "clasicos clasicas", "rancheros rancheras", "hawaianos", "choriperros", "choripapas", "pinchos", "tocinetas", "champiñones", "jalapeños", "chimichurri", "montañera", "alitas bañadas o apanadas"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-plantilla-locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5cb37d55cade473a835b3d4660532060~mv2.png/v1/fill/w_600,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_5cb37d55cade473a835b3d4660532060~mv2.png",
        keywords: ["mirador de la virgen", "frutos rojos del casanare", "mango", "frutas", "salpicon", "piña", "helados", "a domicilios", "turismo", "sitios turisticos", "miradores"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-palogrande-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_76bbdd98c7fd4246875932cefa9ecfd9~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_76bbdd98c7fd4246875932cefa9ecfd9~mv2.png",
        keywords: ["deluxe terraza", "deluz", "delus", "comidas rapidas", "helados", "salchipapas", "picadas", "a domicilios", "restaurantes", "hamburguesas clasicas francesas rancheras mixta bbq mexicana patacon patacones pataconas criolla", "perros", "choripapa", "dorilocos", "granizados", "jugos naturales", "limonada de coco", "Micheladas", "citricas sitricas", "cerezadas", "costillas costillitas", "pechuga", "carnes", "nachos", "tacos", "mazorcadas"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-aldin%C3%AD-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_90ada120ace44d41a8b5b66520e439d0~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_90ada120ace44d41a8b5b66520e439d0~mv2.png",
        keywords: ["ayl extintores y dotaciones", "recargas", "uniformes", "botas", "cascos", "construcción", "seguridad industrial", "señalizacion", "guantes", "gafas", "botiquin", "kit de carreteras", "carros", "elementos", "compañia"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-5/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_cd3d69d08aba49eea9767bf866abed2c~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_cd3d69d08aba49eea9767bf866abed2c~mv2.png",
        keywords: ["Hamburguesas del llano", "comidas rapidas", "helados", "salchipapas", "picadas", "a domicilios", "hamburguesas", "perros"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-do%C3%B1a-barbara",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_a7cc18ce18314b4bbb1fc447d4350a20~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_a7cc18ce18314b4bbb1fc447d4350a20~mv2.png",
        keywords: ["acarreos en motocarro", "carromotos", "trasteos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-2-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_ecffb5f9b02e40778f80183c23f50292~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_ecffb5f9b02e40778f80183c23f50292~mv2.png",
        keywords: ["agua 0.00", "cero", "botellones", "agua potable", "tratada", "pura", "agua potable en botellon"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-9/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_cd33a3b65aaa47dc9ec0a36dc54405af~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_cd33a3b65aaa47dc9ec0a36dc54405af~mv2.png",
        keywords: ["autolujos el mono", "lujos", "accesorios para carros", "luces", "repuestos", "tecnologia", "lujos para carros", "luces para carros", "partes"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-9-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9b95581373a24747878179fd0e393b11~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_9b95581373a24747878179fd0e393b11~mv2.png",
        keywords: ["buñuelo express", "empanadas", "pandebonos", "caldos", "comidas rapidas", "jugos naturales", "cohinitos", "a domicilios"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-le-prova-burguer-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_2ae60fb9b03d41bfbbe296b993c885aa~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_2ae60fb9b03d41bfbbe296b993c885aa~mv2.png",
        keywords: ["brisa del llano", "comidas rapidas", "carne asada", "salchipapas", "picadas", "a la llanera", "restaurantes", "hamburguesas", "perros", "a domicilios", "turismo", "tinto", "cafeteria", "jugos", "granizados", "micheladas", "churrazco", "mayas catamaran", "mallas", "mirador", "sitios turisticos"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-riki-pollo",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_7f4fbf7ee449462da5ad796ae0354399~mv2.png/v1/fill/w_560,h_279,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_7f4fbf7ee449462da5ad796ae0354399~mv2.png",
        keywords: ["pañalera camaritas", "coche", "caminador", "para niños", "para niñas", "caminadores", "orinales", "ropa", "zapatos", "maternidad", "lactancia", "juguetes", "bebes"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-7-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_d5f36e54d68f4a72bc52113ad2456d08~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_d5f36e54d68f4a72bc52113ad2456d08~mv2.png",
        keywords: ["carlitos.net", "papelerias", "copias", "impresiones", "utiles", "escolar", "colegio", "recargas", "peluches", "para mujeres", "llaveros", "accesorios", "auriculares", "audifonos", "cargadores", "para celulares"],
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
        keywords: ["decorplass", "remodelacion", "adecuacion", "contratista", "maestro de construccion", "techos en pvc", "divicion de baño en vidrio templado", "en acrilico", "en aluminio", "muebles en madera rh", "ventanas en vidrio", "puertas en vidrio", "driwall", "dreibol", "distribuidora", "ornamentacion", "mucbles de cocina", "decoracion", "remodelar", "materiales", "construcción", "acabados", "cerrageria", "puerta", "vidrios", "adecuacion", "electricos", "electrica"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-14-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_5cdb359ec67943dc8e0bcc4f4fb312a8~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_5cdb359ec67943dc8e0bcc4f4fb312a8~mv2.png",
        keywords: ["distrillaves", "copia de llaves", "cerrajeria", "cerrajero", "chapas", "llaves", "puertas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-7-of-locales-2-2-2-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_833b506f971943978de6d996916210fe~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_833b506f971943978de6d996916210fe~mv2.png",
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
        keywords: ["variedades donde pacho", "ropa deportiva", "prendas", "camisetas deportivas", "sudaderas", "pantalonetas", "balones", "peluches", "accesorios", "deportes"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-6/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_84ee5aa5ce3c4789917058d7e9b991f0~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_84ee5aa5ce3c4789917058d7e9b991f0~mv2.png",
        keywords: ["Dsysk celulares", "accesorios para celulares", "fundas", "estuches", "antichoques", "cargadores", "audifonos", "diademas", "speakers", "altavoz", "altavoces", "mouses", "teclados", "vidrios para telefonos", "controles", "moviles", "gamepad", "mandos", "gamers", "servicio tecnico"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-14/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9d81a4c5f09c477cb61929bc25e359af~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_9d81a4c5f09c477cb61929bc25e359af~mv2.png",
        keywords: ["el girasol", "proteinas", "vitaminas", "vita cerebrina", "tienda naturista", "natural", "productos naturales", "midicinas", "medicamentos", "purgantes", "potencializadores", "factores de transferencia", "colagenos", "proteinas", "mero macho", "purgantes"],
        link: "https://eatcomercial01.wixsite.com/website-1/locales/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_030540f348f8479b8d57fb8c0c9144ff~mv2.png/v1/fill/w_374,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_030540f348f8479b8d57fb8c0c9144ff~mv2.png",
        keywords: ["reverdecer", "Multivitaminicos fibra aceites corporales para masajes propoleo miel polen jarabes vitaminas para el cabello potenciadores energizantes pomadas analgecicas jabones varices cicatricez cicartrizante purgantes desparacitantes calcio citrato de magnesio vinagre de manzana curcuma esencias florales jugo de uva chancapiedra cartilago de tiburon limpiador arteriovenoso drenador epatico resveratrol yingoviloba Ginkgo bilob yingoviloa complejo b granola gourmet galletas de avena dulces de miel theramiel para refrescar la garganta"],
        link: "https://v0-static-responsive-page.vercel.app/",
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
        keywords: ["el viejo oeste de la pizza", "pizzas", "pizzeria", "a domicilios"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-matilde",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_debce199ddcf496980f9db70f9f05b3c~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_debce199ddcf496980f9db70f9f05b3c~mv2.png",
        keywords: ["floristeria enamorate", "para velorio", "flores", "detalles", "regalos", "peluches", "flores", "matrimonio", "eventos", "arreglos", "decoracion", "fiestas", "15 años", "ramos", "para cepelio"],
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
        keywords: ["estacion crochet", "yohana gonzalez", "bolsos", "manualidades", "insumos para tejeduria", "distribuidoras", "trapillo", "tejidos", "talleres", "crochet", "macrame", "lanas", "copito chelin manualidades amigurumis agujas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-5-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_4bcccd598ee7498da97ccbd575eba3ba~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_4bcccd598ee7498da97ccbd575eba3ba~mv2.png",
        keywords: ["estilo y confort", "fabricas", "hogar", "distribuidoras", "alfombras", "tapetes", "muebles", "camas", "colchones", "espaldares", "sabanas", "tendidos", "artesanias", "toldillos", "cuadros", "sofas", "peinadores", "nocheros", "semanarios", "closets", "salas", "comedores"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-6-of-locales-2-2-2-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_055e14a66020426e99a320a9474dc334~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_055e14a66020426e99a320a9474dc334~mv2.png",
        keywords: ["ferreruedas", "ferreteria", "rodachinas", "roachinas rodachines roachines", "electrodos", "tornillos", "discos para pulidora", "pulir", "discos de corte", "silicona", "pulidora", "ruedas", "rodachines", "roachines", "industriales", "para alumilio", "soldadura", "llantas para bugui carretilla carretiya empaques para puertas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-7/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_14fa4b9ff44e49b395d1c54325fb7268~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_14fa4b9ff44e49b395d1c54325fb7268~mv2.png",
        keywords: ["fertornillos", "ferreterias", "electricos", "electronicos", "a domicilio", "electicidad", "tornillos", "discos", "silicona", "pulidora", "brocas", "tuberia", "pintura en aerosol", "sintisolda", "instantaneo", "pegante", "herramientas", "luces", "bombillos", "cadenas", "zogas", "sogas", "nailon", "cadenas", "llaves", "metros", "cintas de enmascarar", "rodillos", "lamparas", "sintas", "silicona", "cilicona", "brocas", "discos para pulidadora", "espatulas", "niveles", "guantes", "gafas", "pistolas", "rodillos", "alicates", "pinsas", "hombresolos", "bombillos", "portaelectrodo jackson", "tablero", "chapas y cerraduras", "nylons", "copias de llaves", "candados", "mangueras", "palos", "cabos", "electricas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-7/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_65e9d88ccbf041d3b25508cd634ea1cb~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_65e9d88ccbf041d3b25508cd634ea1cb~mv2.png",
        keywords: ["forromotos", "forros", "tapizado", "electrodos", "gratas", "para moto", "cascos", "luces", "accesorios para moto", "repuestos", "taller de motos", "mecanico", "tecnico", "cambio de aceite", "despinche", "montallantas para moto", "lujos", "aceite para moto", "llantas", "neumaticos", "corazas", "rines", "kits de arrastres", "tapizado de motos", "chalecos", "impermeable", "bolsos para motos", "luz led", "bombillos led", "espejos baules maleteros pastillas bandas candados alarmas", "defenzas parrillas guantes manilares", "guarda cadenas portaplacas rodilleras lubricantes", "sliders espumas guardabarros portavientos", "impermeables exploradoras soportes para celular", "botas maniguetas mantenimiento taller calcomanias"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-9-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_37555d2122dd42c1b4cf952129e0e780~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_37555d2122dd42c1b4cf952129e0e780~mv2.png",
        keywords: ["grensi", "perfume", "locion", "perfumeria", "para hombre", "para mujer", "masculin", "femenin"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-2-3/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_298b0c2860194052bb4228080268b056~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_298b0c2860194052bb4228080268b056~mv2.png",
        keywords: ["muebles hym", "fabricas", "hogar", "distribuidoras", "muebles", "camas", "colchones", "espaldares", "sabanas", "tendidos", "artesanias", "toldillos", "cuadros", "sofas", "peinadores", "nocheros", "semanarios", "closets", "salas", "comedores", "electrodomesticos", "estufas", "televisores", "tv", "freidoras", "licuadoras", "espeaker", "altavoces", "ventiladores", "sanducheras", "platos", "tapetes", "alfombras", "puff", "pooh", "mesas", "sillas cillas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-5/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_bd4b1b4a27be4d58a10362e9d6988342~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_bd4b1b4a27be4d58a10362e9d6988342~mv2.png",
        keywords: ["joyeria italiana", "fabricas", "joyerias", "cadenas", "accesorios", "anillos", "argollas", "matrimonio", "boda", "collares", "15 años", "aretes", "relojes", "de pared", "decorativos", "oro", "plata", "joyas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-6/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_2529e1a8380f4c3f87968c931313c529~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_2529e1a8380f4c3f87968c931313c529~mv2.png",
        keywords: ["el jardinero", "Poda de Árboles", "Siembra", "Fumigación", "Corte de Césped", "Dise?", "jardinero", "podador", "podado", "jardineria", "arboles", "jardin"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-8/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8fbab53ae3d548d694ab319ec2701e19~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_8fbab53ae3d548d694ab319ec2701e19~mv2.png",
        keywords: ["restaurante king", "asaderos", "restaurantes", "comida", "poyo", "pollo asado", "pollo broaster", "pollo broster", "almuerzos", "a domicilios"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-le-prova-burguer",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_fdec563ab953415e87a9bdd6d818ec7d~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_fdec563ab953415e87a9bdd6d818ec7d~mv2.png",
        keywords: ["la gota fresca", "agua potable", "agua pura", "agua tratada", "agua en bolsa", "agua en botellon", "saborizadas", "hielo", "a domicilio", "refrescos", "bolis"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9f323f52c2c54f049a458c117f20b8af~mv2.png/v1/fill/w_176,h_152,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_9f323f52c2c54f049a458c117f20b8af~mv2.png",
        keywords: ["la talanquera del llano", "sombreros", "ponchos", "llaneridades", "artesanias", "gorras", "correas", "llaveros", "cotizas", "chimu", "estuches en cuero para celular", "grasa de potro", "aceite de palma", "aceite de palo", "cuchillos", "hamacas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-8/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_cd797d724ba6431d962040afe747f07f~mv2.png/v1/fill/w_328,h_287,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PARAISO-LLANERO.png",
        keywords: ["tiendas artesanales paraiso llanero", "sombreros", "ponchos", "llaneridades", "artesanias", "gorras", "correas", "llaveros", "cotizas", "chimu", "estuches en cuero para celular", "grasa de potro", "cuchillos", "hamacas"],
        link: "https://eatcomercial01.wixsite.com/website-1/locales-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_b6fba71f012044a7870feb54428df806~mv2.png/v1/fill/w_536,h_268,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_b6fba71f012044a7870feb54428df806~mv2.png",
        keywords: ["aqui si es tolima", "lechoneria", "lechona", "tamales", "desayunos", "restaurante", "domingo"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-d-lokos",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_0b92d34d531347aa8f74e5499826e02d~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_0b92d34d531347aa8f74e5499826e02d~mv2.png",
        keywords: ["limon y menta", "ropa", "femenina", "juvenil", "damas", "mujeres", "vestidos", "prendas", "faldas", "gala", "matrimonio", "boda", "15 años", "comunion"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-4-of-locales-6/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_271a84a6ab8a4c9a9f6b876e0f9c481d~mv2.png/v1/fill/w_553,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_271a84a6ab8a4c9a9f6b876e0f9c481d~mv2.png",
        keywords: ["lindo pie", "calzado", "zapatillas", "sandalias", "clasicos", "deportivos", "para caballeros", "para hombres", "femenin", "colegio", "colegiales", "para mujer", "de mujer", "mujeres", "hombres", "damas", "caballeros", "juvenil", "balones", "guayos", "zapatos", "bolsos", "correas", "sandalias", "chanclas", "tacones"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-4/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_e4d16e4cb8f247588cc2443d884bd143~mv2.png/v1/fill/w_720,h_360,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_e4d16e4cb8f247588cc2443d884bd143~mv2.png",
        keywords: ["llano farmex", "drogueria", "tratamientos", "vitaminas", "sueros", "pañales"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-5/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_faa186bfa928467e98c0e50c1aa9521b~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_faa186bfa928467e98c0e50c1aa9521b~mv2.png",
        keywords: ["Lubes bike", "ciclas", "taller de bicicletas", "taller", "alta gama", "siclas", "mantenimiento", "de segunda"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-1-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_b6fe5a0cd6a14f5f9f1ecde839915401~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_b6fe5a0cd6a14f5f9f1ecde839915401~mv2.png",
        keywords: ["megaforros", "forros", "tapiceria", "tapizado", "de carros", "para carros"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-1-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_2fbaee65d3a545848c836c9479544808~mv2.png/v1/fill/w_560,h_275,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_2fbaee65d3a545848c836c9479544808~mv2.png",
        keywords: ["metales y servicios", "metales", "perfiles", "dobladora", "pintura", "construccion", "ornamentacion", "laminas", "cortadoras"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-7/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_f293433e12ae48b3a1972c50d154d934~mv2.png/v1/fill/w_560,h_278,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_f293433e12ae48b3a1972c50d154d934~mv2.png",
        keywords: ["paso fino", "calzado", "cuchillos", "sombrereria", "sombreros", "cotizas", "correas en cuero", "carrieles", "gorras", "botas", "ponchos", "llaneridades", "artesanias", "turismo", "bastimento llanero", "amacas", "billeteras", "estuches", "cuero", "llaveros", "decorativos", "ruanas", "chapas", "bolsos", "accesorios", "chimu", "perreros", "mandadores"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-5-of-locales-2-2-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_b868882bbe2d45ce9e83ec3a0b8f88af~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_b868882bbe2d45ce9e83ec3a0b8f88af~mv2.png",
        keywords: ["pcels", "celulares", "servicio tecnico", "servicio tecnico de televisores", "servicio tecnico de computadores", "electronica", "electrodomesticos", "lavadoras"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-2-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_7ccfcf5df1ae40988f172a458afbbf3f~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_7ccfcf5df1ae40988f172a458afbbf3f~mv2.png",
        keywords: ["Petland", "clinica veterinaria", "camas de mascotas", "casas de mascotas", "bolsos de mascotas", "juguetes para mascotas", "veterinarias", "animales", "mascotas", "esterilizacion", "cirujias", "jaulas", "gatos", "perros", "collares", "isabelinos", "comida para mascotas", "medicamentos para mascotas", "tratamientos para mascotas", "peluqueria y peinados para mascotas", "accesorios para mascotas", "arnes"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-7-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_14f089c43c574e2181ba7a65718c403a~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_14f089c43c574e2181ba7a65718c403a~mv2.png",
        keywords: ["principe hats", "calzado", "cuchillos", "sombrereria", "sombreros", "cotizas", "correas", "gorras", "botas", "ponchos", "llaneridades", "turismo", "estuches", "cuero", "llaveros", "ruanas", "chapas", "accesorios", "chimu"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-14/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_ef3a5980fd3e4ffd9c915877b627b5f5~mv2.png/v1/fill/w_549,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_ef3a5980fd3e4ffd9c915877b627b5f5~mv2.png",
        keywords: ["purpura", "ropa", "femenina", "juvenil", "damas", "mujeres", "vestidos", "prendas", "faldas", "gala", "matrimonio", "boda", "15 años", "comunion"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-10/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_dd13b9619a0b4c10b8f3fc92c601f894~mv2.png/v1/fill/w_560,h_279,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_dd13b9619a0b4c10b8f3fc92c601f894~mv2.png",
        keywords: ["riki pollo", "asadero", "restaurante", "comida", "pollo asado", "pollo broaster", "pollo broster", "almuerzo", "a domicilio", "sopas", "caldos"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-deluxe-terraza-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_630f1a3e4b654de782ecb36c2b530887~mv2.png/v1/fill/w_559,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_630f1a3e4b654de782ecb36c2b530887~mv2.png",
        keywords: ["metalicas san alejo", "ornamentacion", "soldadura", "estantes", "estructuras", "puertas", "ventanas", "parrillas", "rejas", "enrejados"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-7-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_6ed633234ff640f893c4ff5f1518872e~mv2.png/v1/fill/w_559,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_6ed633234ff640f893c4ff5f1518872e~mv2.png",
        keywords: ["Segtronic gps", "gps", "gprs", "rastreo satelital", "monitoreo satelital", "para carros", "para motos", "tecnologia gps", "industrial", "empresas", "compañias"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_43514f08e9fb4894b4a7557bc2ee212e~mv2.png/v1/fill/w_559,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_43514f08e9fb4894b4a7557bc2ee212e~mv2.png",
        keywords: ["servibaterias full cars", "baterias", "para carro", "para moto", "recarga de baterias", "parabrisas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-7-of-locales-2-2-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_aa1092a831a0437b8ec21674c0499f14~mv2.png/v1/fill/w_559,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_aa1092a831a0437b8ec21674c0499f14~mv2.png",
        keywords: ["surtihuevos sami", "huevos", "panela", "papelon", "miel", "aceite", "distribuidora", "salchicon", "minimercado"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-4/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_fc708e287b80494a8b7c5ca04efef9e6~mv2.png/v1/fill/w_559,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_fc708e287b80494a8b7c5ca04efef9e6~mv2.png",
        keywords: ["taller de ornamentacion", "ornamentacion", "soldadura", "estantes", "estructuras", "puertas", "ventanas", "parrillas", "rejas", "enrejado"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-1-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_c5e3ae4a09f743c2907afde8089177d4~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_c5e3ae4a09f743c2907afde8089177d4~mv2.png",
        keywords: ["Ofi tecno smart", "tecnologia", "teclados", "diademas", "audifonos", "cargadores", "auriculares", "mouse", "pc", "portatil", "disco duro", "accesorios tecnologicos", "computador", "gamer", "altavoces", "altavoz", "speaker", "memorias usb"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_eae395853fa149a09fe75ad3e2bd5162~mv2.png/v1/fill/w_560,h_275,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_eae395853fa149a09fe75ad3e2bd5162~mv2.png",
        keywords: ["vidrios y aluminios ht", "ornamentacion", "ventanas", "puertas", "divisiones", "bitrinas", "vitrinas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_9f53f17a6b3549088fc969632b7f5d54~mv2.png/v1/fill/w_560,h_280,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_9f53f17a6b3549088fc969632b7f5d54~mv2.png",
        keywords: ["The project", "ollas", "hollas", "bitrinas", "vitrinas", "estufas industriales", "hornos", "asadores", "caserolas", "sartenes", "pitadoras", "a presion", "cocinas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-11/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_fb5714de09f64426ae6eef2080cbc912~mv2.png/v1/fill/w_599,h_300,al_c,q_85,enc_avif,quality_auto/a4f6c8_fb5714de09f64426ae6eef2080cbc912~mv2.png",
        keywords: ["compraventa de motos", "motos de segunda", "mister motos toño"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-2/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_124acbb827ab445a80795d186b0d4a81~mv2.png/v1/fill/w_543,h_271,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_124acbb827ab445a80795d186b0d4a81~mv2.png",
        keywords: ["torneos de futbol", "deportes", "entrenamiento", "para niños", "para adultos", "para hombres", "deportivo", "balones", "guayos", "pantalonetas", "camisetas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-6-3/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_c7ef7b47c3774ecb8f421690503a45af~mv2.png/v1/fill/w_543,h_271,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_c7ef7b47c3774ecb8f421690503a45af~mv2.png",
        keywords: ["multiservicios mesa", "tramites de transito", "tramitador", "intermediario", "seguros", "soat", "traspasos", "lisincia", "pase", "curso de conduccion"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-13/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8cae7b256b0040caa00131f0566d8cdb~mv2.png/v1/fill/w_500,h_250,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_8cae7b256b0040caa00131f0566d8cdb~mv2.png",
        keywords: ["vp vidrios y aluminios", "ornamentacion", "ventanas", "puertas", "divisiones", "bitrinas", "vitrinas"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-3/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_8d57bad435a9439eb604af187b6d24de~mv2.png/v1/fill/w_500,h_250,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_8d57bad435a9439eb604af187b6d24de~mv2.png",
        keywords: ["pyly asesora", "asesoria juridica", "cartas y oficios", "contratos de compraventa", "obra y arrendamiento", "derechos de peticion", "trabajos en computador y documentos", "refuerzo escolar", "clases de inlges", "poderes", "hojas de vida", "autorizaciones", "cestificaciones", "validacion bachiller"],
        link: "https://eatcomercial01.wixsite.com/multiservicios-faro/copia-de-pcels-1",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_08d0670ff993448b8bada947e02646c6~mv2.png/v1/fill/w_500,h_250,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_08d0670ff993448b8bada947e02646c6~mv2.png",
        keywords: ["audiovisuales", "edicion de video", "diseño grafico", "produccion multimedia", "tarjetas de presentacion", "volantes de publicidad", "avisos", "estampados", "sublimacion", "administracion de redes", "grabacion de videos", "fotografia", "produccion de video", "edicion de imagenes"],
        link: "https://eatcomercial01.wixsite.com/multiservicios-faro/copia-de-la-escuadra",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_1af61e10fef1451d9e9350ef98e9dab5~mv2.png/v1/fill/w_500,h_250,al_c,lg_1,q_85,enc_avif,quality_auto/a4f6c8_1af61e10fef1451d9e9350ef98e9dab5~mv2.png",
        keywords: ["La tienda del pie", "calzado", "zapatillas", "sandalias", "zapatos", "colegiales", "para el colegio", "femeninos", "femeninas", "para mujeres", "masculinos", "chanclas", "sandalias", "tacones", "para niños", "para niñas", "para caballeros", "para hombres", "clasicos", "deportivos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-of-locales-3/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_fe8ad2725ed74d469ab62485c17f4cb0~mv2.png/v1/fill/w_313,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_fe8ad2725ed74d469ab62485c17f4cb0~mv2.png",
        keywords: ["Estilos hr", "calzado", "zapatos", "zapatillas", "sandalias", "colegiales", "para el colegio", "femeninos", "femeninas", "para mujeres", "masculinos", "chanclas", "sandalias", "tacones", "para niños", "para niñas", "para caballeros", "para hombres", "clasicos", "deportivos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-11/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_14391915daf64beda7cfa5e02858f4f1~mv2.png/v1/fill/w_304,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_14391915daf64beda7cfa5e02858f4f1~mv2.png",
        keywords: ["Sarat sport", "calzado", "zapatos", "zapatillas", "sandalias", "colegiales", "para el colegio", "femeninos", "femeninas", "para mujeres", "masculinos", "chanclas", "sandalias", "tacones", "para niños", "para niñas", "para caballeros", "para hombres", "deportivos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-5-of-locales-11/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_d3f7a4127abf4062b297c875c3bbc734~mv2.png/v1/fill/w_259,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_d3f7a4127abf4062b297c875c3bbc734~mv2.png",
        keywords: ["Estucos y masillas", "pinturas", "aerosol", "espray", "lijas", "electricos", "electricidad", "electrica", "tuvos", "tubos", "codos", "sifones", "cifones", "brochas", "tornillos", "graniplas", "pegantes", "fabricas", "ferreterias", "materiales", "esmaltes", "anticorrosivos", "ceramicos", "seramicos", "superpega", "herramientas", "llaves", "metros", "cintas de enmascarar", "rodillos", "lamparas", "sintas", "silicona", "cilicona", "brocas", "discos para pulidadora", "espatulas", "niveles", "guantes", "gafas", "pistolas", "rodillos", "alicates", "pinsas", "hombresolos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-6-of-locales-11/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_a8c5b06c36194e9bb5e766e5230759c5~mv2.png/v1/fill/w_313,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_a8c5b06c36194e9bb5e766e5230759c5~mv2.png",
        keywords: ["arepaisas", "arepas", "comidas rapidas", "con queso", "con chorizo", "chorizos", "frijoles", "calentados", "asadas", "con carne", "paisas"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-le-prova-burguer-2",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_a5c55e721e64470aac4381259a38794a~mv2.png/v1/fill/w_313,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_a5c55e721e64470aac4381259a38794a~mv2.png",
        keywords: ["Maxidescuentos", "ropa", "femenina", "juvenil", "damas", "mujeres", "vestidos", "prendas", "faldas", "gala", "matrimonio", "boda", "15 años", "comunion", "camisas", "pantalones", "gorras", "correas", "blusas", "chalecos", "chaquetas", "minifaldas", "ropa interior", "busos", "camisetas", "para hombres", "masculinas masculinos", "para niño niña"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-4-of-locales-11/locales",
    },
    {
        id: 1,
        url: "https://static.wixstatic.com/media/a4f6c8_b69ad1717ae74076b7044be5354277f7~mv2.png/v1/fill/w_313,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_b69ad1717ae74076b7044be5354277f7~mv2.png",
        keywords: ["Multiservicios donde lucho", "lavaderos", "lavado", "carros", "motos", "lava autos", "lavautos", "parqueaderos", "donde lucho", "automotriz", "aceites", "lubricantes", "polichado"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales-4-1/locales",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_64ce59ee473a425fa16fb179c5bfe736~mv2.png/v1/fill/w_248,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/homero.png",
        keywords: ["homero pipe", "comidas rapidas", "salchipapas", "picadas", "a domicilios", "hamburguesas", "perros calientes", "helados", "heladeria", "fruteria", "empanadas"],
        link: "https://eatcomercial01.wixsite.com/deliplan/copia-de-fruteria-pipe",
    },
    {
        id: 3,
        url: "https://static.wixstatic.com/media/a4f6c8_6ae52191c4e74acb85e2d19a3aec5203~mv2.png/v1/fill/w_248,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_6ae52191c4e74acb85e2d19a3aec5203~mv2.png",
        keywords: ["Eben-Ezer", "libreria", "libros", "biblias", "accesorios", "cuadernos personalizados", "mensajes cristianos biblicos", "posillos pocillos mugs", "cuadros decorativos", "miscelanea", "esferos lapiceros", "agendas", "diarios", "devocionales"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-3-of-locales-4-1/locales",
    },
    {
        id: 4,
        url: "https://static.wixstatic.com/media/a4f6c8_3c691f9600f548d59cf41d2244f80976~mv2.png/v1/fill/w_228,h_116,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a4f6c8_3c691f9600f548d59cf41d2244f80976~mv2.png",
        keywords: ["las delicias de la mami", "jugos naturales", "jugos verdes", "jugos", "helados", "pulpas de frutas", "batidos", "maracumango", "deportes", "gym", "salud", "alimentos"],
        link: "https://eatcomercial01.wixsite.com/website-1/copy-2-of-locales/locales",
    },
];

// Lista de palabras comunes que no se deben considerar
const stopWords = [
    "a", "de", "para", "el", "la", "los", "las", "y", "o", "en", "con", "un", "una", "del", "al", "por"
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

    const queryWords = query
        .split(" ")
        .filter((word) => word && !stopWords.includes(word)); // Excluir palabras comunes

    if (queryWords.length === 0) {
        alert("Por favor, usa palabras clave más específicas.");
        return;
    }

    toggleLoadingIndicator(true); // Mostrar indicador de carga

    setTimeout(() => {
        const filteredImages = [];
        const partialMatches = [];

        images.forEach((image) => {
            const normalizedKeywords = image.keywords.map(normalizeString);

            if (queryWords.some((word) => normalizedKeywords.includes(word))) {
                filteredImages.push(image);
            } else {
                const matches = queryWords.filter((word) =>
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
        "<p>Usa la barra de búsqueda para encontrar cualquier establecimiento, producto o servicio que necesites.</p>";
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
            max-width: 180px;
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
