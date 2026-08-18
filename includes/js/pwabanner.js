/* ======================================
   PWA BANNER INCLUDE
====================================== */

fetch("/includes/pwa.html")
  .then(response => {

    if (!response.ok) {
      throw new Error(
        "Banner file not found: " + response.status
      );
    }

    return response.text();

  })
  .then(data => {

    const bannerContainer =
      document.getElementById("pwa");

    if (bannerContainer) {

      bannerContainer.innerHTML = data;

      console.log("PWA banner loaded successfully.");

    } else {

      console.error(
        "Element #pwaBanner not found."
      );

    }

  })
  .catch(error => {

    console.error(
      "PWA banner loading failed:",
      error
    );

  });