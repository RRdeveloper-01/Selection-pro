fetch("/includes/translate.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("translate").innerHTML = data;
  });
