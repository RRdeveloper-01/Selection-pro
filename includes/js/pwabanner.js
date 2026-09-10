/* ======================================
   PWA + PROMOTIONAL BANNER INCLUDE
====================================== */

fetch("/includes/pwa.html?v=4")
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
    },

    {
      id: "support",
      image: "/images/support.webp",
      link: "/support.html"
    }

  ];


  /* ======================================
     SETTINGS
  ====================================== */

  // Popup 3–4 seconds ke baad show hoga
  const SHOW_DELAY_MIN = 3000;
  const SHOW_DELAY_MAX = 4000;


  // Banner show hone ke baad
  // poori website par 10 minute cooldown
  const GLOBAL_COOLDOWN =
    10 * 60 * 1000;


  // Close kiya hua particular banner
  // 24 hours tak avoid hoga
  const BANNER_COOLDOWN =
    24 * 60 * 60 * 1000;


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


  /* ======================================
     CURRENT BANNER
  ====================================== */

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
     SAVE BANNER CLOSE TIME
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
     CHECK 24-HOUR BANNER COOLDOWN
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
      Number(closed[id]);


    return (
      currentTime - closeTime
    ) < BANNER_COOLDOWN;

  }


  /* ======================================
     CHECK GLOBAL 10-MINUTE COOLDOWN
  ====================================== */

  function canShowPromo() {

    const lastShown =
      localStorage.getItem(
        "promoLastShown"
      );


    // Pehli baar banner show ho raha hai
    if (!lastShown) {
      return true;
    }


    const currentTime =
      Date.now();


    const timePassed =
      currentTime - Number(lastShown);


    // 10 minutes complete hone par true
    return timePassed >= GLOBAL_COOLDOWN;

  }


  /* ======================================
     SHOW RANDOM BANNER
  ====================================== */

  function showRandomBanner() {

    /* ----------------------------------
       GLOBAL 10-MINUTE CHECK
    ---------------------------------- */

    if (!canShowPromo()) {

      console.log(
        "Promo cooldown active. Banner will not show."
      );

      return;
    }


    /* ----------------------------------
       FIND AVAILABLE BANNERS
    ---------------------------------- */

    const availableBanners =
      promoBanners.filter(
        banner =>
          !isClosedWithin24Hours(
            banner.id
          )
      );


    /* ----------------------------------
       ALL BANNERS CLOSED
    ---------------------------------- */

    if (availableBanners.length === 0) {

      console.log(
        "All promo banners are closed for 24 hours."
      );

      return;
    }


    /* ----------------------------------
       RANDOM BANNER
    ---------------------------------- */

    const randomIndex =
      Math.floor(
        Math.random() *
        availableBanners.length
      );


    const banner =
      availableBanners[randomIndex];


    /* ----------------------------------
       SAVE CURRENT BANNER ID
    ---------------------------------- */

    currentBannerId =
      banner.id;


    /* ----------------------------------
       SET IMAGE
    ---------------------------------- */

    promoImage.src =
      banner.image;


    /* ----------------------------------
       SET LINK
    ---------------------------------- */

    promoLink.href =
      banner.link;

    localStorage.setItem(
      "promoLastShown",
      Date.now()
    );


    /* ----------------------------------
       SHOW POPUP
    ---------------------------------- */

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

      /* Hide popup */

      promoPopup.style.display =
        "none";


      /* ----------------------------------
         SAVE THIS BANNER FOR 24 HOURS
      ---------------------------------- */

      if (currentBannerId) {

        saveClosedBanner(
          currentBannerId
        );

      }


      console.log(
        "Promo banner closed:",
        currentBannerId
      );

    }
  );

  promoLink.addEventListener(
    "click",
    function() {



      if (currentBannerId) {

        saveClosedBanner(
          currentBannerId
        );

      }


      console.log(
        "Promo banner clicked:",
        currentBannerId
      );

      /*
        Yahan koi localStorage reset
        nahi karna hai.

        promoLastShown already save ho chuka hai,
        isliye next page par 10-minute cooldown
        automatically continue rahega.
      */

    }
  );


  /* ======================================
     SHOW AFTER RANDOM 3–4 SECONDS
  ====================================== */

  const randomDelay =
    Math.floor(
      Math.random() *
      (
        SHOW_DELAY_MAX -
        SHOW_DELAY_MIN +
        1
      )
    ) + SHOW_DELAY_MIN;


  console.log(
    "Promo popup will appear after:",
    randomDelay,
    "ms"
  );


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