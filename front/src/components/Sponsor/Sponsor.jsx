import React, { useState, useEffect } from "react";
import Navigation from "../Navigation";
import SponsorItem from "./SponsorItem";
import SearchInput from "../input/InputMinus";
import { GetSponsors } from "../../request/sponsors.request";
import Spinner from "../Spinner";
import { PuitAthletes } from "../../request/athletes.request";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from "../Banner";
import Header from "../Header";



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

    const notify = (msg) => toast(`Waouh vous avez ${msg} !`, {
      icon: "😍"
    });

    useEffect(() => {
      const handleScroll = () => {

        if (window.scrollY === 640 && page < 100 && data.length === 10 ) {
          setPage(prevState => prevState + 10)
          setLoad(true)
        }
      };

      window.addEventListener('scroll',handleScroll)

      return () => {

        window.removeEventListener('scroll',handleScroll)
      };
    }, [page, data.length]);

    const handleMatching = () => {
      // matching element athlete
      // matching les sponsor qui corresponde aux donées en dure.
      const sport = "football"

      GetSponsors().then(res => {

        setData(res.data.data.filter(v => v.attributes?.sports === sport))
      })
    }

    const handleLike = (id) => {

      GetSponsors().then(res => {

        if(res.data.data[id-1].attributes?.likes?.find(v => v.id === 1)){
          notify('un Match')
          PuitAthletes({data :{
            likes: [{"id": 1}]
          }}, 1)
        }else{
          notify('liké')
          PuitAthletes({data :{
            likes: [{"id": 1}]
          }}, 1)
        }
      })
    }

    return (

      <div>
        <Header />
        <Banner isAthlete={false} />
        <ToastContainer />

        <div className="d-flex">
        <button onClick={() => handleMatching()} type="button" className="btn btn-primary btn-lg" id="load2" data-loading-text="<i class='fa fa-spinner fa-spin '></i> Processing Order">Match</button>

        {
          load
          ? <Spinner />
          : <div className="d-flex flex-column align-items-center gap-3 column-sponsor"  >
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
                        <h3 className="card-title">
                          {attributes.name}
                        </h3>
                        <p className="card-text">
                          {attributes.email}
                        </p>
                        <button onClick={() => handleLike(id)}>
                          Like sponsor
                        </button>
                      </div>
                  </div>
                )
              })
            }
          </div>
        }
          <div className="column-sponsor rounded" style={{backgroundColor: '#ff5757'}}>
            <SponsorItem sponsor={selected} />
          </div>
      </div>
    </div>
    )
}

export default Sponsor;
