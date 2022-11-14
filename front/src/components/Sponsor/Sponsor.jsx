import React, {useState} from "react";
import Navigation from "../Navigation";
import sponsors from '../../database/sponsors.json'
import SponsorItem from "./SponsorItem";

const Sponsor = () => {


    const [selected, setSelected] = useState(null)

    const handleClick = (id) => {

      setSelected(sponsors.filter(element => element._id === id))
    }

    return (
    <div >
        Sponsor
        <Navigation />


        <div className="d-flex">

          <div className="d-flex justify-content-around flex-wrap gap-5 container mt-5 column-sponsor">
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

        <div className="sponsor-item column-sponsor bg-success m-5">

            <SponsorItem sponsor={selected} />

        </div>

        </div>



    </div>)
}

export default Sponsor;
