import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import sponsors from '../../database/sponsors.json'
import SponsorItem from "./SponsorItem";
import Spinner from "./Spinner";

const Sponsor = () => {

    const initialState =  {
      about: "",
      company: "",
      sports: [],
      phone: "",
      isActive: ""
    }

    const [selected, setSelected] = useState([initialState])

    const [data, setData] = useState([])

    const [page, setPage] = useState(0)

    const [load, setLoad] = useState(true)

    useEffect(() => {

      if(load) {
        const timer = setTimeout(() => {

          setData(sponsors.slice(page, page + 10))
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
        if (window.scrollY === 110 && page < 100 ) {
          setPage(prevState => prevState + 10)
          setLoad(true)
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [page]);


    console.log(page)

    return (
    <div  >
        Sponsor
        <Navigation />

        <div className="d-flex mt-5">

        {
          load

          ? <Spinner />


          : <div className="d-flex flex-column align-items-center gap-3 column-sponsor">
              {
                data.map(({_id, company, email, picture}) => {
                  return (

                      <div key={_id}
                      className="card rounded"
                      style={{width: '18rem'}}
                      onClick={() => handleClick(_id)}
                      >
                        <img src={picture} alt={company} className="card-img-top" />
                          <div className="card-body">
                            <h3 className="card-title">{company}</h3>
                            <p className="card-text">{email}</p>
                          </div>
                      </div>

                  )
                })

              }
          </div>
        }
        <div className="column-sponsor border border-primary rounded">

            <SponsorItem sponsor={selected} />

        </div>

        </div>



    </div>)
}

export default Sponsor;
