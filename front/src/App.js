//import Signin from './Signin/Signin';
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect, useState } from "react";
import { onMessageListener, RequestForToken } from "./utils/Firebase";

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
    })
    .catch((err) => console.log("failed: ", err));
  return (
    <AuthProvider>
      <div className="App">
        {/* <Signin /> */}
        <Signup />
      </div>
    </AuthProvider>
  );
}

export default App;
