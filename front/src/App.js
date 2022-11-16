//import Signin from './Signin/Signin';
import Main from "./Route";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import { onMessageListener, RequestForToken } from "./utils/Firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Notification } from "./utils/Notification";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import { Route, Routes } from "react-router";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer/footer";

function App() {
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    if (notification?.title) {
      Notification(notification);
    }
  }, [notification]);

  RequestForToken();

  onMessageListener()
    .then((payload) => {
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
      }
    })
    .catch((err) => console.log("failed: ", err));
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
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
