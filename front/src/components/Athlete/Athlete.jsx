import React, {useState, useEffect} from "react";
import Navigation from "../Navigation";
import athlete from "../../database/athlete.json"
import AthleteItem from "./AthleteItem";
import Spinner from "../Spinner";


const Athlete = () => {

    const [selected, setSelected] = useState("")

    const [data, setData] = useState([])

    const [page, setPage] = useState(0)

    const [load, setLoad] = useState(true)

    useEffect(() => {

      if(load) {
        const timer = setTimeout(() => {

          setData(athlete.slice(page, page + 10))
          setLoad(false)

        }, 1000);
        return () => clearTimeout(timer);
      }

    }, [page, load])

    const handleClick = (id) => {

      setSelected(data.filter(element => element._id === id))
    }

    useEffect(() => {
      const handleScroll = () => {

        if (window.scrollY === 570 && page < 100 ) {
          setPage(prevState => prevState + 10)
          setLoad(true)
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [page]);


    return (
    <div >
        Sponsor
        <Navigation />

        <div className="d-flex mt-5">

        {
          load

          ? <Spinner />


          : <div className="d-flex flex-column align-items-center gap-3 column-sponsor">
              {
                data.map((v) => {
                  return (

                      <div key={v.recordid}
                      className="card rounded"
                      style={{width: '18rem'}}
                      onClick={() => handleClick(v.recordid)}
                      >
                        <img src={"https://www.radiofrance.fr/s3/cruiser-production/2022/11/b4a8652e-ce65-4dbf-b9f2-70f9c2c07ba9/560x315_capture-d-ecran-2022-11-14-111004.jpg"} alt="" className="card-img-top" />
                          <div className="card-body">
                            <h3 className="card-title">{v.fields.prenom} {v.fields.nom}</h3>
                            <p className="card-text">{v.fields.sport}</p>
                          </div>
                      </div>

                  )
                })

              }
          </div>
        }

        <div className="column-sponsor border border-primary rounded">

            <AthleteItem athlete={selected} />

        </div>


        </div>





    </div>)
}

export default Athlete;
