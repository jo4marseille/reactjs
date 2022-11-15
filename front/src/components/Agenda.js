import data from "../epreuve.json";

export default function Agenda() {
  console.log(data);
  return (
    <>
      <div className="choose-title">
        <h2>Agenda épreuves de voile</h2>
        <p className="epreuves-voile">
          <p className="description-voile">
            La particularité des épreuves olympiques est que les compétiteurs
            s'affrontent sur des embaractions identiques.
          </p>
          <p className="nb-athletes">+330 athlètes</p>
          <div className="agenda-container">
            <div className="agenda-type">
              <div className="items">
                <span>Planche à voile à foil</span>
                <br /> Jeudi 25 juillet
                <br />
              </div>
              <div className="items">
                <br />
                <span>Le dériveur double</span> <br />
                Dimanche 28 juillet
                <br />
                <br />
              </div>
              <div className="items">
                <span>Le dériveur solitaire</span>
                <br /> Mercredi 31 juillet
                <br />
                <br />
              </div>
              <div className="items">
                <span>Le kiteboard</span> <br />
                Samedi 3 août
                <br />
                <br />
              </div>
              <div className="items">
                <span>Le catamaran à foil double</span>
                <br />
                Mardi 6 août
                <br />
                <br />
              </div>
            </div>
          </div>
        </p>
        <h2>Agenda épreuves de foot masculin et féminin</h2>
        <p className="epreuves-foot">
          <p className="description-foot">
            Les équipes se composent essentiellement de joueurs de moins de 23
            ans (seuls 3 joueurs plus âgés sont autorisés).
          </p>
          <p className="nb-athletes">
            +288 athlètes homme et +199 athlètes femme
            <br />
            16 teams masculines et 11 teams féminines
          </p>
          <div className="agenda-container">
            <div className="agenda-date">
              Mercredi 24 juillet
              <br />
              <br /> Samedi 27 juillet
              <br />
              <br /> Mardi 30 juillet
              <br />
              <br /> Vendredi 2 août
              <br /> <br />
              Lundi 5 août
            </div>
          </div>
        </p>
      </div>
    </>
  );
}
