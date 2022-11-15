import axios from "axios";

const Instance = () => {
  return axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 8a092cb4b8ed1a885ea9db27aba6ef600086d53f2c5957925c7c408039b66909c550d002fafe2944731669c0c3bf077eb0735f418b4c82da464d353812dcaf764ff876447f21039c9e54463c3a847c10c2aac65d68453a75d1fc134a1cf2219a48c677b010e2f765688f3be1aca479de07e4122d2787e3358cc3aec11d1f1836",
    },
  });
};
Instance().defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default Instance;
