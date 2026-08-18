fetch("/includes/pwa.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("PWA banner failed to load");
    }

    return response.text();
  })
  .then(data => {

    const pwa = document.getElementById("pwa");

    if (!pwa) {
      console.error("#pwa element not found");
      return;
    }

    pwa.innerHTML = data;

    // Tell pwa.js that banner HTML is ready
    document.dispatchEvent(
      new Event("pwaBannerReady")
    );

  })
  .catch(error => {
    console.error("PWA banner loading error:", error);
  });