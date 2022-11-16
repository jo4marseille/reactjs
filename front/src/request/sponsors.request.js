import Instance from "../axios.instance";

export const PostSponsors = (data) => {
  console.log(data)
  return Instance().post("/sponsors", data);
};

export const GetSponsors = () => {
  return Instance().get("/sponsors");
};
