import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcUSvCD-XsR8qR7U4npvF4bUeaM59ofPs",
  authDomain: "jo-2024-notification-push.firebaseapp.com",
  projectId: "jo-2024-notification-push",
  storageBucket: "jo-2024-notification-push.appspot.com",
  messagingSenderId: "907049070164",
  appId: "1:907049070164:web:26b3145d9217791be9c7c1",
  measurementId: "G-P1D1VZTHM6",
};

export const fire = initializeApp(firebaseConfig);

export const auth = getAuth(fire);

const messaging = getMessaging(fire);

export const RequestForToken = () => {
  getToken(messaging, {
    vapidKey:
      "BCHsyTHdX-rGBpIS3DuLWhmouO6ogfk0v240U-zYkTvHIlO-2T1MT_ssjvHDIT-_QSy-wJW6NPNCwoGpsA6rU40",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("Firebase Token", currentToken);
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
