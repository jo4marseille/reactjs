import Instance from "../axios.instance";

export const PostSponsors = (data) => {
  return Instance().post("/athletes", data);
};

export const GetSponsors = () => {
  return Instance().get("/athletes");
};
