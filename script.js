async function fetchButtons() {
  try {
    const response = await fetch('buttons.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar los botones:", error);
    return [];
  }
}

async function search() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const buttons = await fetchButtons();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  const results = buttons.filter(button =>
    button.keywords.some(keyword => keyword.includes(query))
  );

  if (results.length > 0) {
    results.forEach(button => {
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      resultItem.innerHTML = `<a href="${button.url}" target="_blank">${button.name}</a>`;
      resultsContainer.appendChild(resultItem);
    });
  } else {
    resultsContainer.innerHTML = "<p>No se encontraron resultados.</p>";
  }
}
