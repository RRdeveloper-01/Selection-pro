window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal) {
  await OneSignal.init({
    appId: "18fa4ad8-4d7f-46d3-b4d8-6d509aa9c425",
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: true
  });
});