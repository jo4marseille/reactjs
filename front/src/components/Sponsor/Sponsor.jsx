import React, { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation";
// import sponsors from '../../database/sponsors.json'
import SponsorItem from "./SponsorItem";
import { GetSponsors } from "../../request/sponsors.request";
import Spinner from "../Spinner";

const Sponsor = () => {

    const initialState =  {
      id:"",
      attributes: {
        name: "",
        sports: "",
        picture: "",
        email: "",
        phone: "",
        isActive: "",
        createdAt: "",
      }
      }

    const dataContainer = useRef()

    const [selected, setSelected] = useState([initialState])

    const [data, setData] = useState([])

    const [page, setPage] = useState(0)

    const [load, setLoad] = useState(true)

    useEffect(() => {

      if(load) {
        const timer = setTimeout(() => {
          GetSponsors().then(res => {
            setData(res.data.data.reverse().slice(page, page + 10))
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

        if (dataContainer.current.scrollTop === 2128 && page < 100 && data.length === 10 ) {
          setPage(prevState => prevState + 10)
          setLoad(true)
        }
      };

      const current = dataContainer?.current

      dataContainer?.current?.addEventListener('scroll',handleScroll)
      return () => {

        current?.removeEventListener('scroll',handleScroll)
      };
    }, [page, data.length]);


    return (

    <div >
        <div className="page_title">Sponsor</div>
        <Navigation />

        <div className="d-flex mt-5">

        {
          load

          ? <Spinner />


          : <div className="d-flex flex-column align-items-center gap-3 column-sponsor" ref={dataContainer}>
              {
                data.map(({id, attributes}) => {
                  return (

                      <div key={id}
                      className="card rounded"
                      style={{width: '18rem'}}
                      onClick={() => handleClick(id)}
                      >
                        <img src={attributes.picture} alt={attributes.name} className="card-img-top" />
                          <div className="card-body">
                            <h3 className="card-title">{attributes.name}</h3>
                            <p className="card-text">{attributes.email}</p>
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
