/* ======================================
   footer INCLUDE
====================================== */

fetch(`/includes/footer.html?v=3`)
  .then(response => {

    if (!response.ok) {
      throw new Error(
        "footer file not found: " + response.status
      );
    }

    return response.text();

  })
  .then(data => {

    const bannerContainer =
      document.getElementById("footer");

    if (bannerContainer) {

      bannerContainer.innerHTML = data;

      console.log("footer loaded successfully.");

    } else {

      console.error(
        "Element #footer not found."
      );

    }

  })
  .catch(error => {

    console.error(
      "footer loading failed:",
      error
    );

  });