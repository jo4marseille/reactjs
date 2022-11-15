import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
const Home = () => {

  const navigate = useNavigate();

  const handleSubmit = () => navigate('/sponsor');

  return <div>
    Home
    <Navigation />

      <div className="m-5 text-end">
        <button onClick={() => handleSubmit()}>Match</button>
      </div>

  </div>;
};

export default Home;
