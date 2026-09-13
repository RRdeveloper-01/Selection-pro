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
/* ==========================================
   SELECTION PRO - BOTTOM NAVIGATION JS
========================================== */

(function () {

  "use strict";


  /* ========================================
     DASHBOARD PAGES
  ======================================== */

  const dashboardPages = [

    // Example:
    // "/profile.html",
    // "/my-preparation.html"

  ];


  /* ========================================
     TEST SERIES PAGES
  ======================================== */

  const testSeriesPages = [
"/english_mock_test.html","/hindi_mock_test.html"
    

  ];


  /* ========================================
     CURRENT AFFAIRS PAGES
  ======================================== */

  const currentAffairsPages = [

    "/daily-current-affairs.html",

    "/current-affairs-notes.html",

    "/current-affairs-quiz.html",

    "/quiz/current-affairs-quiz.html"

  ];


  /* ========================================
     RESOURCES PAGES
     
     Resources se related extra pages
     yahan add kar sakte ho.
  ======================================== */

  const resourcesPages = [

"/sscchsl.html","/ssccgl.html","/sbiclerk.html","/rrb.html","/rbi.html","/neet.html","/jipmer.html","/jeemains.html","/jeeadvanced.html","/ibpspo.html","/gate.html","/cuet.html","/exam.html"
  ];


  /* ========================================
     HOME PAGES
     
     Home se related pages yahan add
     kar sakte ho.
  ======================================== */

  const homePages = [

    "/",
    "/index.html"

  ];


  /* ========================================
     GET CURRENT PATH
  ======================================== */

  function getCurrentPath() {

    let path =
      window.location.pathname
        .toLowerCase();


    /* Remove trailing slash */

    if (
      path.length > 1 &&
      path.endsWith("/")
    ) {

      path =
        path.slice(0, -1);

    }


    return path;

  }


  /* ========================================
     CHECK PAGE IN ARRAY
  ======================================== */

  function isPageInList(
    path,
    pageList
  ) {

    return pageList.includes(path);

  }


  /* ========================================
     SET ACTIVE PAGE
  ======================================== */

  function setActivePage(
    page,
    nav
  ) {

    const items =
      nav.querySelectorAll(
        ".sp-nav-item"
      );


    items.forEach(function (item) {

      item.classList.remove(
        "active"
      );

    });


    const active =
      nav.querySelector(
        '[data-page="' +
        page +
        '"]'
      );


    if (active) {

      active.classList.add(
        "active"
      );

    }

  }


  /* ========================================
     CURRENT AFFAIRS DETECTION
  ======================================== */

  function isCurrentAffairsPage(
    path
  ) {

    /* Any page inside Current Affairs */

    if (

      path ===
      "/current-affairs" ||

      path.startsWith(
        "/current-affairs/"
      )

    ) {

      return true;

    }


    /* Extra Current Affairs pages */

    if (
      isPageInList(
        path,
        currentAffairsPages
      )
    ) {

      return true;

    }


    return false;

  }


  /* ========================================
     TEST SERIES DETECTION
  ======================================== */

  function isTestSeriesPage(
    path
  ) {

    /* Test Series folder */

    if (

      path ===
      "/mock" ||

      path.startsWith(
        "/mock/"
      )

    ) {

      return true;

    }


    /* Extra Test Series pages */

    if (
      isPageInList(
        path,
        testSeriesPages
      )
    ) {

      return true;

    }


    return false;

  }


  /* ========================================
     DASHBOARD DETECTION
  ======================================== */

  function isDashboardPage(
    path
  ) {

    /* Main Dashboard */

    if (
      path === "/my-dashboard.html"
    ) {

      return true;

    }


    /* Extra Dashboard pages */

    if (
      isPageInList(
        path,
        dashboardPages
      )
    ) {

      return true;

    }


    return false;

  }


  /* ========================================
     RESOURCES DETECTION
  ======================================== */

  function isResourcesPage(
    path
  ) {

    /* Resources folder */

    if (

      path === "/resources" ||

      path.startsWith(
        "/resources/"
      )

    ) {

      return true;

    }


    /* Extra Resources pages */

    if (
      isPageInList(
        path,
        resourcesPages
      )
    ) {

      return true;

    }


    return false;

  }


  /* ========================================
     HOME DETECTION
  ======================================== */

  function isHomePage(
    path
  ) {

    return isPageInList(
      path,
      homePages
    );

  }


  /* ========================================
     DETECT ACTIVE PAGE
  ======================================== */

  function detectActivePage(
    nav
  ) {

    const path =
      getCurrentPath();


    /* --------------------------------------
       CURRENT AFFAIRS
       
       Check first because it has many
       sub-pages.
    -------------------------------------- */

    if (
      isCurrentAffairsPage(path)
    ) {

      setActivePage(
        "current-affairs",
        nav
      );

      return;

    }


    /* --------------------------------------
       DASHBOARD
    -------------------------------------- */

    if (
      isDashboardPage(path)
    ) {

      setActivePage(
        "dashboard",
        nav
      );

      return;

    }


    /* --------------------------------------
       TEST SERIES
    -------------------------------------- */

    if (
      isTestSeriesPage(path)
    ) {

      setActivePage(
        "test-series",
        nav
      );

      return;

    }


    /* --------------------------------------
       RESOURCES
    -------------------------------------- */

    if (
      isResourcesPage(path)
    ) {

      setActivePage(
        "resources",
        nav
      );

      return;

    }


    /* --------------------------------------
       HOME
    -------------------------------------- */

    if (
      isHomePage(path)
    ) {

      setActivePage(
        "home",
        nav
      );

      return;

    }

  }


  /* ========================================
     CLICK EVENTS
  ======================================== */

  function addClickEvents(
    nav
  ) {

    if (
      nav.dataset.eventsAdded ===
      "true"
    ) {

      return;

    }


    const items =
      nav.querySelectorAll(
        ".sp-nav-item"
      );


    items.forEach(function (item) {

      item.addEventListener(
        "click",
        function () {

          items.forEach(
            function (navItem) {

              navItem.classList.remove(
                "active"
              );

            }
          );


          this.classList.add(
            "active"
          );

        }
      );

    });


    nav.dataset.eventsAdded =
      "true";

  }


  /* ========================================
     INITIALIZE NAVIGATION
  ======================================== */

  function initialize() {

    const nav =
      document.getElementById(
        "spBottomNav"
      );


    if (!nav) {

      return false;

    }


    /* Detect current page */

    detectActivePage(nav);


    /* Add click events */

    addClickEvents(nav);


    return true;

  }


  /* ========================================
     WAIT FOR FETCHED HTML
  ======================================== */

  function start() {

    /* Try immediately */

    if (initialize()) {

      return;

    }


    /*
       bottom-nav.html agar fetch()
       se baad mein load hota hai,
       MutationObserver usko detect karega.
    */

    const observer =
      new MutationObserver(
        function () {

          if (initialize()) {

            observer.disconnect();

          }

        }
      );


    if (document.body) {

      observer.observe(
        document.body,
        {
          childList: true,
          subtree: true
        }
      );

    }

  }


  /* ========================================
     START SCRIPT
  ======================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  }

  else {

    start();

  }


})();