/* ======================================
PWA + PROMOTIONAL BANNER INCLUDE
====================================== */

fetch("/includes/pwa.html?v=3")
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

if (!bannerContainer) {

  console.error(
    "Element #pwa not found."
  );

  return;
}

/* ======================================
   INSERT HTML
====================================== */

bannerContainer.innerHTML = data;

console.log(
  "PWA + Promo banner loaded successfully."
);


/* ======================================
   PROMOTIONAL BANNERS
====================================== */

const promoBanners = [

  {
    id: "current-affairs",
    image: "/images/current-affairs-common.webp",
    link: "/current-affairs/affairs-hub.html"
  },

  {
    id: "preparation-guide",
    image: "/images/strategy.webp",
    link: "/blog/preparation-guide.html"
  }

];


/* ======================================
   GET ELEMENTS AFTER HTML IS LOADED
====================================== */

const promoPopup =
  document.getElementById("promoPopup");

const promoImage =
  document.getElementById("promoImage");

const promoLink =
  document.getElementById("promoLink");

const promoClose =
  document.getElementById("promoClose");


/* ======================================
   SAFETY CHECK
====================================== */

if (
  !promoPopup ||
  !promoImage ||
  !promoLink ||
  !promoClose
) {

  console.error(
    "Promo popup elements not found."
  );

  return;
}


let currentBannerId = null;


/* ======================================
   GET CLOSED BANNERS
====================================== */

function getClosedBanners() {

  const data =
    localStorage.getItem(
      "closedPromoBanners"
    );

  return data
    ? JSON.parse(data)
    : {};

}


/* ======================================
   SAVE CLOSE TIME
====================================== */

function saveClosedBanner(id) {

  const closed =
    getClosedBanners();

  closed[id] = Date.now();

  localStorage.setItem(
    "closedPromoBanners",
    JSON.stringify(closed)
  );

}


/* ======================================
   CHECK 24 HOURS
====================================== */

function isClosedWithin24Hours(id) {

  const closed =
    getClosedBanners();

  if (!closed[id]) {
    return false;
  }

  const currentTime =
    Date.now();

  const closeTime =
    closed[id];

  const twentyFourHours =
    24 * 60 * 60 * 1000;

  return (
    currentTime - closeTime
  ) < twentyFourHours;

}


/* ======================================
   SHOW RANDOM BANNER
====================================== */

function showRandomBanner() {

  const availableBanners =
    promoBanners.filter(
      banner =>
        !isClosedWithin24Hours(
          banner.id
        )
    );


  /* Sab banners closed hain */

  if (availableBanners.length === 0) {

    console.log(
      "All promo banners are closed for 24 hours."
    );

    return;
  }


  /* Random banner */

  const randomIndex =
    Math.floor(
      Math.random() *
      availableBanners.length
    );


  const banner =
    availableBanners[randomIndex];


  currentBannerId =
    banner.id;


  /* Set image */

  promoImage.src =
    banner.image;


  /* Set link */

  promoLink.href =
    banner.link;


  /* Show popup */

  promoPopup.style.display =
    "flex";


  console.log(
    "Promo banner shown:",
    banner.id
  );

}


/* ======================================
   CLOSE BUTTON
====================================== */

promoClose.addEventListener(
  "click",
  function() {

    promoPopup.style.display =
      "none";


    if (currentBannerId) {

      saveClosedBanner(
        currentBannerId
      );

    }

  }
);


/* ======================================
   SHOW AFTER RANDOM 3–4 SECONDS
====================================== */

const randomDelay =
  Math.floor(
    Math.random() * 1000
  ) + 3000;


setTimeout(
  function() {

    showRandomBanner();

  },
  randomDelay
);

})
.catch(error => {

console.error(
  "PWA / Promo banner loading failed:",
  error
);

});