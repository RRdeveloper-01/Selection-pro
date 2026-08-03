function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en"
    },
    "google_translate_element"
  );
}

function changeLanguage(lang) {
  const selectField = document.querySelector(".goog-te-combo");

  if (selectField) {
    selectField.value = lang;
    selectField.dispatchEvent(new Event("change"));
  }
}