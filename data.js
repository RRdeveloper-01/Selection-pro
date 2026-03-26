/*function searchFunction() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toUpperCase();
  let ul = document.getElementById('itemList');
  let li = ul.getElementsByTagName('li');
  let hasResults = false;

  // STEP 1: Agar input empty hai toh list hide karo aur function rok do
  if (filter.length === 0) {
    ul.style.display = "none";
    return; 
  }

  // STEP 2: Agar kuch type kiya hai, toh list show karo
  ul.style.display = "block";

  // STEP 3: Items filter karo
  for (let i = 0; i < li.length; i++) {
    let textValue = li[i].textContent || li[i].innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      hasResults = true;
    } else {
      li[i].style.display = "none";
    }
  }

  // Bonus: Agar koi match na mile toh list phir se hide kar sakte hain
  if (!hasResults) {
    ul.style.display = "none";
  }
}
*/
// Content coming soon functionality


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
