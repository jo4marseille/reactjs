import React, { useEffect, useState, useRef } from "react";
import LogRegAPI from "../../Services/LogRegAPI";
import "./LogReg.css";

export default function LogReg() {
  const [isLoading, setIsLoading] = useState(false);
  const [profil, setProfil] = useState();
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

  return (
    <div className="container">
      <div className="container-onglets">
        <div className="onglets active" data-anim="1">
          Destination
        </div>
        <div className="onglets" data-anim="2">
          Destination
        </div>
      </div>

      <div className="contenu activeContenu" data-anim="1" onSubmit={submitLog}>
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={emailLogRef}
          required
        />

        <input
          type="password"
          name="email"
          placeholder="password"
          ref={passwordLogRef}
          required
        />
        <button type="submit">
          <p>Submit</p>
        </button>
      </div>

      <div className="contenu activeContenu" data-anim="2">
        <h3>Lorem</h3>
        <p>Contenu 2</p>
      </div>
    </div>
  );
}
