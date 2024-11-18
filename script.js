function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const categories = document.querySelectorAll("section");
    categories.forEach(category => {
        const title = category.querySelector("h2").textContent.toLowerCase();
        category.style.display = title.includes(input) ? "block" : "none";
    });
}
