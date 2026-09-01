/* ======================================
   PWA BANNER INCLUDE
====================================== */

fetch(`/includes/pwa.html?v=2`)
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
  //promo banner
  const promoBanners = [

    {
        id: "current-affairs",
        image: "/images/current-affairs-common.webp",
        link: "/current-affairs/affairs-hub.html"
    },

    {
        id: "preparation-guide",
        image: "/images/preparation-guide.webp",
        link: "/blog/preparation-guide.html"
    }

];


const promoPopup = document.getElementById("promoPopup");
const promoImage = document.getElementById("promoImage");
const promoLink = document.getElementById("promoLink");
const promoClose = document.getElementById("promoClose");

let currentBannerId = null;


// =====================================
// GET CLOSED BANNERS
// =====================================

function getClosedBanners() {

    const data = localStorage.getItem("closedPromoBanners");

    return data ? JSON.parse(data) : {};

}


// =====================================
// SAVE CLOSE TIME
// =====================================

function saveClosedBanner(id) {

    const closed = getClosedBanners();

    closed[id] = Date.now();

    localStorage.setItem(
        "closedPromoBanners",
        JSON.stringify(closed)
    );

}


// =====================================
// CHECK 24 HOURS
// =====================================

function isClosedWithin24Hours(id) {

    const closed = getClosedBanners();

    if (!closed[id]) {
        return false;
    }

    const currentTime = Date.now();

    const closeTime = closed[id];

    const twentyFourHours = 24 * 60 * 60 * 1000;

    return (currentTime - closeTime) < twentyFourHours;

}


// =====================================
// SHOW RANDOM BANNER
// =====================================

function showRandomBanner() {

    const availableBanners = promoBanners.filter(
        banner => !isClosedWithin24Hours(banner.id)
    );


    // Agar sab banners 24 hours ke liye closed hain
    if (availableBanners.length === 0) {
        return;
    }


    // Random banner
    const randomIndex = Math.floor(
        Math.random() * availableBanners.length
    );


    const banner = availableBanners[randomIndex];


    currentBannerId = banner.id;


    promoImage.src = banner.image;

    promoLink.href = banner.link;


    promoPopup.style.display = "flex";

}


// =====================================
// CLOSE BUTTON
// =====================================

promoClose.addEventListener("click", function() {

    promoPopup.style.display = "none";


    if (currentBannerId) {

        saveClosedBanner(currentBannerId);

    }

});


// =====================================
// SHOW AFTER RANDOM 3–4 SECONDS
// =====================================

const randomDelay =
    Math.floor(Math.random() * 1000) + 3000;


setTimeout(function() {

    showRandomBanner();

}, randomDelay);