export function simpleSearch(searchInput, getData, onResults) {
  if (!searchInput || !getData || !onResults) {
    throw new Error("simpleSearch requires inputEl, getData, and onResults.");
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const data = getData();

    if (!query) {
      onResults(data);
      return;
    }

    const filtered = data.filter(item =>
      JSON.stringify(item).toLowerCase().includes(query)
    );

    onResults(filtered);
  });
}
