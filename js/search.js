const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

let currentFilter = "all";

// FILTER BUTTON CLICK
filters.forEach(btn => {
  btn.addEventListener("click", () => {

    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.type;
    filterResults();

  });
});

// SEARCH INPUT
searchInput.addEventListener("input", filterResults);

function filterResults() {

  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {

    const text = card.textContent.toLowerCase();
    const type = card.dataset.type;

    const matchesText = text.includes(query);
    const matchesType = currentFilter === "all" || type === currentFilter;

    if (matchesText && matchesType) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });
}