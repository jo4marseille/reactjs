import React from "react";
import loupe from "../../img/assets/index.png";
import { useNavigate } from "react-router-dom";

function Input() {
  const navigate = useNavigate();

  const handleSubmit = () => navigate("/sponsor");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="SearchedInput font" type="text" placeholder="" />
        <img
          type="submit"
          src={loupe}
          className="loupeMinus"
          onClick={() => navigate("/sponsor")}
        />
      </form>
    </div>
  );
}

export default Input;
