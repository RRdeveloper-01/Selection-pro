//install banner includes//
fetch("/includes/install.html")
  .then(response => response.text())
  .then(data => {

    const footer = document.getElementById("install");

    if (footer) {
      footer.innerHTML = data;
    }

  })
  .catch(error => {

    console.error(
      "install banner loading failed:",
      error
    );

  });


document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('main-search');
    const list = document.getElementById('suggestions-list');
    const items = list.getElementsByTagName('li');

    window.openSearch = function () {
        overlay.style.display = 'flex';
        searchInput.focus();
    };

    window.closeSearch = function () {
        overlay.style.display = 'none';
        searchInput.value = '';
        filterSuggestions();
    };

    window.filterSuggestions = function () {
        const filter = searchInput.value.toLowerCase();

        if (filter.length > 0) {
            list.style.display = 'block';

            for (let i = 0; i < items.length; i++) {
                let text = items[i].textContent || items[i].innerText;
                items[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
            }
        } else {
            list.style.display = 'none';
        }
    };

    document.onkeydown = function (evt) {
        if (evt.key === "Escape") closeSearch();
    };

});