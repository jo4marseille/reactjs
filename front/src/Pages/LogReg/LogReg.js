import React, { useEffect, useState, useRef } from "react";
import LogRegAPI from "../../Services/LogRegAPI";
import "./LogReg.css";

export default function LogReg() {
  const [isLoading, setIsLoading] = useState(false);
  const [profil, setProfil] = useState();
  const onglets = document.querySelectorAll("onglets");
  const emailLogRef = useRef();
  const passwordLogRef = useRef();

  useEffect(() => {}, []);

  const submitLog = (event) => {
    event.preventDefault();

    const Email = emailLogRef.current.value;
    const Password = passwordLogRef.current.value;

    //Controle input Email + Mdp
    if (Email.trim().length === 0 || Password.trim().length === 0) {
      return <p>Insert a valid Mail or Password</p>;
    }
    //Controle Validité Email
    const regExEmail = (value) => {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    };

    if (!regExEmail(Email)) {
      return;
    }

    //Login Formulaire

    const data = LogRegAPI.login(Email, Password).then((response) => {
      window.localStorage.setItem("userToken", response.data.jwt);
      setProfil(response.data.user);
    });
    console.log(data);
  };

  const Login = (event) => {
    if (document.getElementById("reg").classList.contains("active")){
        document.getElementById("reg").classList.remove("active");
        document.getElementById("log").classList.add("active");
        document.getElementById("regContent").classList.remove("activeContenu");
        document.getElementById("logContent").classList.add("activeContenu");
    }
    
  };

  const Register = (event) =>{
    if (document.getElementById("log").classList.contains("active")){
        document.getElementById("log").classList.remove("active");
        document.getElementById("reg").classList.add("active");
        document.getElementById("logContent").classList.remove("activeContenu");
        document.getElementById("regContent").classList.add("activeContenu");
    }
};

  return (
    <div className="container">
      <div className="container-onglets">
        <button id="log" className="onglets active" onClick={Login}>
          Login
        </button>
        <button id ="reg" className="onglets" onClick={Register}>
          Register
        </button>
      </div>

      <div id="logContent" className="contenu activeContenu" onSubmit={submitLog}>
        <form onSubmit={submitLog}>
          <input type="email" placeholder="email" ref={emailLogRef} required />

          <input
            type="password"
            placeholder="password"
            ref={passwordLogRef}
            required
          />
          <button type="submit">
            <p>Submit</p>
          </button>
        </form>
      </div>

      <div id="regContent" className="contenu">
        <h3>Lorem</h3>
        <p>Contenu 2</p>
      </div>
    </div>
  );
}
