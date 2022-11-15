import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import SearchInput from "./input/Input"
import Nageur from "../img/assets/photo-header.gif"
const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = () => navigate('/sponsor');

  return <div>
    <img className="nageur" src={Nageur} alt="Nageur Olympique" />
    <Navigation />

      <div className="m-5 text-end">
        <SearchInput />
        <button onClick={() => handleSubmit()}>Match</button>
      </div>

  </div>;
};

export default Home;
