
export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./js/SW.js')
        .then(function () {
          console.log('Service Worker Registered');
        })
        .catch(function (err) {
          console.log('Service Worker Failed to Register', err);
        });
      const status = document.getElementById('status');
      (function updateOnlineStatus() {
        const condition = navigator.onLine ? 'online' : 'offline';
        status.className = condition;
        status.innerHTML = navigator.onLine ? 'Online' : "Oops, seems like you're offline";
        window.addEventListener('online', updateOnlineStatus);
        window.addEventListener('offline', updateOnlineStatus);
      }());
    });
  }
}
