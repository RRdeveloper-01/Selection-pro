/* ======================================
   FOOTER INCLUDE
====================================== */

fetch("/includes/footer.html")
  .then(response => response.text())
  .then(data => {

    const footer = document.getElementById("footer");

    if (footer) {
      footer.innerHTML = data;
    }

  })
  .catch(error => {

    console.error(
      "Footer loading failed:",
      error
    );

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

        console.error(
          "Selection Pro Service Worker registration failed:",
          error
        );

      });

  });

}



/* ======================================
   PWA INSTALL PROMPT
====================================== */

let deferredInstallPrompt = null;


/* Get banner elements */

const installBanner =
  document.getElementById("pwaInstallBanner");

const installButton =
  document.getElementById("pwaInstallBtn");

const closeButton =
  document.getElementById("pwaCloseBtn");



/* ======================================
   CHECK IF APP IS ALREADY INSTALLED
====================================== */

function isPWAInstalled() {

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );

}



/* ======================================
   BROWSER INSTALL EVENT
====================================== */

window.addEventListener(
  "beforeinstallprompt",
  function (event) {

    /*
       Prevent browser from showing
       its automatic prompt immediately.
    */

    event.preventDefault();


    /*
       Save the event so our custom
       Install App button can use it.
    */

    deferredInstallPrompt = event;


    /*
       Don't show banner if app
       is already installed.
    */

    if (isPWAInstalled()) {
      return;
    }


    /*
       Show our custom banner.
    */

    if (installBanner) {

      installBanner.style.display = "flex";

    }

  }
);



/* ======================================
   INSTALL BUTTON
====================================== */

if (installButton) {

  installButton.addEventListener(
    "click",
    async function () {

      if (!deferredInstallPrompt) {

        console.log(
          "PWA installation is not currently available."
        );

        return;

      }


      /*
         Show official browser
         installation dialog.
      */

      deferredInstallPrompt.prompt();


      /*
         Wait for user's choice.
      */

      const result =
        await deferredInstallPrompt.userChoice;


      console.log(
        "Selection Pro installation:",
        result.outcome
      );


      /*
         Clear saved prompt.
      */

      deferredInstallPrompt = null;


      /*
         Hide banner.
      */

      if (installBanner) {

        installBanner.style.display = "none";

      }

    }
  );

}



/* ======================================
   CLOSE BUTTON
====================================== */

if (closeButton) {

  closeButton.addEventListener(
    "click",
    function () {

      if (installBanner) {

        installBanner.style.display = "none";

      }

    }
  );

}



/* ======================================
   APP INSTALLED
====================================== */

window.addEventListener(
  "appinstalled",
  function () {

    console.log(
      "Selection Pro PWA installed successfully."
    );


    deferredInstallPrompt = null;


    if (installBanner) {

      installBanner.style.display = "none";

    }

  }
);