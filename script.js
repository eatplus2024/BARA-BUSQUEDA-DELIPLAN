document.querySelector("#search-btn").addEventListener("click", async () => {
  const consulta = document.querySelector("#search-input").value.trim();
  const resultadosDiv = document.querySelector("#resultados");
  resultadosDiv.innerHTML = "Buscando...";

  try {
    const response = await fetch(`https://fantasy-persistent-salmonberry.glitch.me/buscar?q=${consulta}`);
    if (!response.ok) {
      throw new Error("Error en la búsqueda");
    }

    const data = await response.json();
    resultadosDiv.innerHTML = "";

    data.forEach(item => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");

      resultItem.innerHTML = `
        <img src="${item.url}" alt="${item.nombre}" style="max-width: 100px;">
        <a href="${item.enlace}" target="_blank">${item.nombre}</a>
      `;

      resultadosDiv.appendChild(resultItem);
    });
  } catch (error) {
    resultadosDiv.innerHTML = "No se encontraron resultados o hubo un error en la búsqueda.";
  }
});
