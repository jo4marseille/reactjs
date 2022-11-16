import fond from "./fond.jpg";
import "../App.css";

function Home() {
  return (
    <>
      <div className="all">
        <div className="square">
          <img src={fond} alt="" className="fond" />
          <div className="presentation">
            <h1 className="pres-title">
              Marseille, <br /> les JO et vous
            </h1>

            <p className="pres-description">
              Découvrez l'authentique ville de Marseille derrière <br />
              les Jeux Olympiques ! <br />
              Quel monument visiter à côté de La Marina ? <br />
              Où manger une bouillabaisse près du Vélodrome ?<br />
              <br />
              <span>
                Retrouvez toutes les informations indispensables à votre visite
                !
              </span>
            </p>
          </div>
        </div>
        <div className="choose-events">
          <h2 className="choose-title">Quel événement allez-vous voir ?</h2>
          <div className="cards">
            <div className="card-voile">
              {/* <img src={voile} alt="" className="voile" /> */}
              <p>
                ÉPREUVES <br />
                OLYMPIQUES
                <br />
                DE VOILE
              </p>
            </div>
            <div className="card-foot">
              {/* <img src={foot} alt="" className="foot" /> */}
              <p>
                ÉPREUVES <br />
                OLYMPIQUES
                <br /> DE FOOTBALL
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
