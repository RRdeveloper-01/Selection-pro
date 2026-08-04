// Header aur Logo ko auto-translate se rokne ke liye
document.addEventListener("DOMContentLoaded", function() {
    // Header tag ya logo selector ko target karein
    var header = document.querySelector("header"); 
    var logo = document.querySelector(".hero h1, .brand-logo, .logo");

    if (header) {
        header.classList.add("notranslate");
        header.setAttribute("translate", "no");
    }
    if (logo) {
        logo.classList.add("notranslate");
        logo.setAttribute("translate", "no");
    }
});

// 1. Set default language to 'hi' (Hindi) if not already set by user
//var currentLang = localStorage.getItem0('selectedLanguage') || 'hi'; 

// Apply cookie for Google Translate
document.cookie = "googtrans=/en/" + currentLang + "; path=/; domain=" + window.location.hostname;
document.cookie = "googtrans=/en/" + currentLang + "; path=/;";

// 2. Google Translate Init
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'hi,en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// 3. Function when user manually clicks language change button
function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang); // Choice save ho jayegi
  document.cookie = "googtrans=/en/" + lang + "; path=/; domain=" + window.location.hostname;
  document.cookie = "googtrans=/en/" + lang + "; path=/;";
  location.reload(); // Page refresh hoke new language me load hoga
}
