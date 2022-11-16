// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCcUSvCD-XsR8qR7U4npvF4bUeaM59ofPs",
  authDomain: "jo-2024-notification-push.firebaseapp.com",
  projectId: "jo-2024-notification-push",
  storageBucket: "jo-2024-notification-push.appspot.com",
  messagingSenderId: "907049070164",
  appId: "1:907049070164:web:26b3145d9217791be9c7c1",
  measurementId: "G-P1D1VZTHM6",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  console.log("okok");
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
