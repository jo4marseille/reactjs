import { toast } from "react-toastify";

export const Notification = (payload) => {
  toast(payload.title + " : " + payload.body, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
