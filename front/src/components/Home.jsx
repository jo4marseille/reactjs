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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="" />
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>

  </div>;
};

export default Home;
