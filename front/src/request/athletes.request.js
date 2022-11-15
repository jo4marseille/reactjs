import Instance from "../axios.instance";

export const PostAthletes = (data) => {
  return Instance().post("/athletes", data);
};

export const PuitAthletes = (data, id) => {
  return Instance().put("/athletes/" + id, data);
};

export const GetAthletes = () => {
  return Instance().get("/athletes");
};
