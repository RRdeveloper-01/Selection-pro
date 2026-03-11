function searchFunction() {
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

// Content coming soon functionality
let content = document.getElementsByClassName('coming');

// Loop through each element with the class 'coming' and add event listener
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener('click', function() {
    Swal.fire({
  text: 'This content is coming soon🎯',
  
  imageUrl: 'logo.jpeg', 
  imageWidth: 100,
  imageHeight: 100,
  imageAlt: 'Custom icon',
  confirmButtonText: 'Check it later'
    })
  });
}
