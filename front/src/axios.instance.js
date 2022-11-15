import axios from "axios";

const Instance = () => {
  return axios.create({
    baseURL: "http://localhost:1337/api",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 1cbdca9ee29f07d92b50bd70cce630b3d9ffbf086b2620daf0f8215c758ec21706c6404211da9638b8d39e23f5c322e36e928d52adc8e0585f63601f2c1a76adf9f0612050fa72e44cd1ada582659770c6710fe9da8b0acd09f16f98d8e90db390b0c28ea43758d4f6d3c2bc1ffa1d62aeab98010b791536e7e183e81259bd6b",
    },
  });
};
Instance().defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default Instance;
