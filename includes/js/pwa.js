/* ======================================
   SERVICE WORKER
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
          "Service Worker registration failed:",
          error
        );

      });

  });

}



/* ======================================
   PWA INSTALL
====================================== */

window.deferredInstallPrompt = null;

function getPwaElements() {

  return {

    banner:
      document.getElementById("pwaInstallBanner"),

    installButton:
      document.getElementById("pwaInstallBtn"),

    closeButton:
      document.getElementById("pwaCloseBtn")

  };

}


function isPwaInstalled() {

  return (
    window.matchMedia(
      "(display-mode: standalone)"
    ).matches ||

    window.navigator.standalone === true
  );

}



/* ======================================
   INSTALL PROMPT
====================================== */

window.addEventListener(
  "beforeinstallprompt",
  function (event) {

    event.preventDefault();

    window.deferredInstallPrompt = event;

    const elements = getPwaElements();

    if (
      elements.banner &&
      !isPwaInstalled()
    ) {

      elements.banner.style.display = "flex";

    }

    console.log(
      "Selection Pro install prompt available."
    );

  }
);



/* ======================================
   INSTALL BUTTON
====================================== */

document.addEventListener(
  "click",
  async function (event) {

    if (
      event.target &&
      event.target.id === "pwaInstallBtn"
    ) {

      const elements = getPwaElements();


      if (!window.deferredInstallPrompt) {

        alert(
          "Install option is not available right now. Please use your browser's Install option from the menu."
        );

        return;

      }


      window.deferredInstallPrompt.prompt();


      const result =
        await window.deferredInstallPrompt.userChoice;


      console.log(
        "Installation result:",
        result.outcome
      );


      window.deferredInstallPrompt = null;


      if (elements.banner) {

        elements.banner.style.display = "none";

      }

    }

  }
);



/* ======================================
   CLOSE BANNER
====================================== */

document.addEventListener(
  "click",
  function (event) {

    if (
      event.target &&
      event.target.id === "pwaCloseBtn"
    ) {

      const elements = getPwaElements();

      if (elements.banner) {
        elements.banner.style.display = "none";
      }

    }

  }
);



/* ======================================
   APP INSTALLED
====================================== */

window.addEventListener(
  "appinstalled",
  function () {

    console.log(
      "Selection Pro installed successfully."
    );

    window.deferredInstallPrompt = null;

    const elements = getPwaElements();

    if (elements.banner) {
      elements.banner.style.display = "none";
    }

  }
);