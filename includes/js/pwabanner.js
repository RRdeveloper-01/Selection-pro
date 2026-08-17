fetch("/includes/pwa.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("pwa").innerHTML = data;
  });
