import axios from "axios";

const Instance = () => {
  return axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 4e3382ac49435af655866867ae8b0d6e1df3eaad25227b77a94229167245942c0f71edd35ec66a56c34a21081effa13ad9682aa26f7e11ba74e1a458ecdcb1cdd02782ccb25406add09278145c3a94dca2a1787d4c96a0be5bfcaaad626f6ceeb00f709befd0624f95bac66cc7f043976a82a607333ff54382d25fa1b548c528",
    },
  });
};
Instance().defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default Instance;
