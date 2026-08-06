fetch("/includes/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Header load ho gaya
    initNotification();
  });