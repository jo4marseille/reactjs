import Main from "./Route";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import {database, onMessageListener, RequestForToken} from "./utils/Firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "./utils/Notification";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import { Route, Routes } from "react-router";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer/footer";
import {onValue, ref, update} from "firebase/database";

function App() {
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    if (notification?.title) {
      Notification(notification);
      console.log("Je lance la notification");
    }
  }, [notification]);

  RequestForToken();

  onValue(ref(database), (snapshot) => {
    const data = snapshot.val()
    console.log(Date.now())
    console.log(data["count_notify"])
    update(ref(database), {
      count_notify: data.count_notify += 1
    })
    setInterval(() => {
      for (let i = 0; i < data.length; i++) {
        const date = Date.now()
        if (data[i].start_to === (date)) {
          console.log("data ", data[i])
        }
        if (data[i].start_to === (date)) {
          console.log("data ", data[i])
        }
        if (data[i].start_to === (date)) {
          console.log("data ", data[i])
        }
      }
    }, 60000)
  })

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  setNotification({
    title: payload?.notification?.title,
    body: payload?.notification?.body,
  });

  if (localStorage.getItem("notification") === null) {
    const getNotif = localStorage.setItem(
        "notification",
        JSON.stringify([
          {
            title: payload?.notification?.title,
            body: payload?.notification?.body,
          },
        ])
    );
    console.log("getNotif", getNotif);
  } else {
    const getNotif = localStorage.getItem("notification");
    console.log("getNotif", JSON.parse(getNotif));
    const concat = JSON.parse(getNotif).concat([
      {
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      },
    ]);
    const setNotif = localStorage.setItem(
        "notification",
        JSON.stringify(concat)
    );
  }.catch((err) => console.log("failed: ", err));
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<Homepage />} />
          {/* <Route path="/notification" element={<Homepage />} /> */}
        </Routes>
        <Footer/>
      </AuthProvider>
    </>
  );
}

export default App;
