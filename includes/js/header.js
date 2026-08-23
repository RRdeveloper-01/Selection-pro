fetch('/includes/header.html?v=2')
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Header load ho gaya
    initNotification();
  });
  // UPI Payment Functionality
window.payNow = function(amount) {
    var upiId = "8528568653@slc";
    var name = "Support Us";
    var upiUrl = "upi://pay?pa=" + upiId + "&pn=" + encodeURIComponent(name) + "&am=" + amount + "&cu=INR";
    window.location.href = upiUrl;
};

// Auto-inject banner at the top of body
document.addEventListener("DOMContentLoaded", function () {
    fetch("includes/banner.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Banner fetch failed");
            }
            return response.text();
        })
        .then(data => {
            // Adds banner at the very top of <body>
            document.body.insertAdjacentHTML("afterbegin", data);
        })
        .catch(error => console.error("Banner loading error:", error));
});
