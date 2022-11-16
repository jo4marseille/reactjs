import React, {useState, useEffect} from "react";
import Header from "../Header";
import Banner from './../Banner'
import AthleteItem from "./AthleteItem";
import Spinner from "../Spinner";
import { GetAthletes } from "../../request/athletes.request";


const Athlete = () => {

    const [selected, setSelected] = useState("")

    const [data, setData] = useState([])

    const [page, setPage] = useState(0)

    const [load, setLoad] = useState(true)


    useEffect(() => {

      if(load) {
        const timer = setTimeout(() => {
          GetAthletes().then(res => {
            setData(res?.data?.data.slice(page, page + 10))

          })

          setLoad(false)

        }, 1000);
        return () => clearTimeout(timer);
      }

    }, [page, load])

    const handleClick = (id) => {

      setSelected(data.filter(element => element.id === id))
    }

    useEffect(() => {
      const handleScroll = () => {

        if (window.scrollY === 862  && page < 100 && data.length === 10) {
          setPage(prevState => prevState + 10)
          setLoad(true)
        }
      };

      window.addEventListener('scroll', handleScroll);


      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [page, data.length]);



    return (
    <div>

        <Header />
        <Banner isNotAthlete={true} />

        <div className="d-flex">

        {
          load

          ? <Spinner />


          : <div className="d-flex flex-column align-items-center gap-3 column-sponsor" >
              {
                data.map(({id, attributes}) => {
                  return (

                      <div key={id}
                      className="card rounded"
                      style={{width: '18rem'}}
                      onClick={() => handleClick(id)}
                      >
                        <img src={"https://www.radiofrance.fr/s3/cruiser-production/2022/11/b4a8652e-ce65-4dbf-b9f2-70f9c2c07ba9/560x315_capture-d-ecran-2022-11-14-111004.jpg"} alt="" className="card-img-top" />
                          <div className="card-body">
                            <h3 className="card-title">{attributes.Name}</h3>
                            <p className="card-text">{attributes.sports}</p>
                          </div>
                      </div>

                  )
                })

              }
          </div>
        }

        <div className="column-sponsor rounded" style={{backgroundColor: '#ff5757'}}>

            <AthleteItem athlete={selected} />

        </div>


        </div>





    </div>)
}

export default Athlete;
