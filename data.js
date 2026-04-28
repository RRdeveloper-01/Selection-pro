//search function
const overlay = document.getElementById('search-overlay');
        const searchInput = document.getElementById('main-search');
        const list = document.getElementById('suggestions-list');
        const items = list.getElementsByTagName('li');
      // Search open karne ke liye
        function openSearch() {
            overlay.style.display = 'flex';
            searchInput.focus(); // Auto focus on input
            }
  // Search close karne ke liye
        function closeSearch() {
            overlay.style.display = 'none';
            searchInput.value = ''; // Clear text
            filterSuggestions(); // Reset list
        }
      // Suggestions filter karne ka logic
        function filterSuggestions() {
            const filter = searchInput.value.toLowerCase();
            let hasResults = false;

            if (filter.length > 0) {
                list.style.display = 'block';
                for (let i = 0; i < items.length; i++) {
                    let text = items[i].textContent || items[i].innerText;
                    if (text.toLowerCase().indexOf(filter) > -1) {
                        items[i].style.display = "";
                        hasResults = true;
                    } else {
                        items[i].style.display = "none";
                    }
                }
            } else {
                list.style.display = 'none';
            }
        }

        // Keyboard 'Esc' se band karne ke liye
        document.onkeydown = function(evt) {
            if (evt.key === "Escape") closeSearch();
        };
