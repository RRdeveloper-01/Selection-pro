/* ======================================
   FOOTER INCLUDE
====================================== */

fetch("/includes/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


/* ======================================
   SERVICE WORKER / PWA
====================================== */

if ("serviceWorker" in navigator) {

  window.addEventListener("load", function () {

    navigator.serviceWorker
      .register("/service-worker.js")
      .then(function (registration) {

        console.log(
          "Selection Pro Service Worker registered:",
          registration.scope
        );

      })
      .catch(function (error) {

        console.log(
          "Selection Pro Service Worker registration failed:",
          error
        );

      });

  });

}