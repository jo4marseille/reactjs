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
import Footer from "./Footer/footer";

function App() {
  const [notification, setNotification] = useState({ title: "", body: "" });

  useEffect(() => {
    if (notification?.title) {
      Notification(notification);
      console.log("Je lance la notification");
    }
  }, [notification]);

  RequestForToken();

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </AuthProvider>
    </>
  );
}

export default App;
