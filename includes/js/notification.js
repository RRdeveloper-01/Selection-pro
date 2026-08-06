// notification.js

function initNotification() {

    const btn = document.getElementById("notifyBtn");

    if (!btn) return;

    function updateButton() {

        if (Notification.permission === "granted") {

            btn.innerHTML = "✅ Notifications Enabled";
            btn.style.pointerEvents = "none";
            btn.style.opacity = "0.8";

        } else if (Notification.permission === "denied") {

            btn.innerHTML = "⚠️ Enable in Browser Settings";

        } else {

            btn.innerHTML = "🔔 Enable Notifications";

        }

    }

    updateButton();

    btn.addEventListener("click", function (e) {

        e.preventDefault();

        if (Notification.permission === "default") {

            OneSignalDeferred.push(async function (OneSignal) {

                await OneSignal.Notifications.requestPermission();

                updateButton();

            });

        } else if (Notification.permission === "denied") {

            alert("Notifications are blocked.\n\nPlease enable them from your browser settings.");

        }

    });

}

// Header load hone ke baad call karna
document.addEventListener("DOMContentLoaded", function () {

    initNotification();

});

// 8 second baad automatic prompt
window.addEventListener("load", function () {

    setTimeout(function () {

        if (Notification.permission === "default") {

            OneSignalDeferred.push(async function (OneSignal) {

                await OneSignal.Slidedown.promptPush();

            });

        }

    }, 8000);

});