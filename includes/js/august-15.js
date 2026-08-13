fetch("/includes/august-15.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("august").innerHTML = data;
  });
