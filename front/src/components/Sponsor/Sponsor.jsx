import React, {useState} from "react";
import Navigation from "../Navigation";
import sponsors from '../../database/sponsors.json'
import SponsorItem from "./SponsorItem";
import SearchInput from "../input/InputMinus";
import Nageur from "../../img/assets/photo-header.gif";

const Sponsor = () => {

    const initialState =  {
      about: "",
      company: "",
      sports: [],
      phone: "",
      isActive: ""
    }


    const [selected, setSelected] = useState([initialState])

    const handleClick = (id) => {

      setSelected(sponsors.filter(element => element._id === id))
    }

    return (
    <div >
      <img className="nageurScoped" src={Nageur} alt="Nageur Olympique" />
      
      <SearchInput />
      <div className="d-flex mt-5 positionOffers">
        <div className="d-flex flex-column align-items-center gap-3 column-sponsor">
          {
            sponsors.map(({_id, company, email, picture}) => {
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
      <div className="column-sponsor border border-primary rounded">
          <SponsorItem sponsor={selected} />
      </div>
      </div>
      <Navigation />
    </div>)
}

export default Sponsor;
