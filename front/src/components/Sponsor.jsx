import React from "react";
import Navigation from "./Navigation";
import sponsors from '../database/sponsors.json'

const Sponsor = () => {

  console.log(sponsors)
    return (
    <div>
        Sponsor
        <Navigation />

        <div className="d-flex justify-content-around flex-wrap gap-5 container mt-5">
            {
              sponsors.map(({id, company, email, picture}) => {
                return (

                    <div key={id} className="card rounded" style={{width: '18rem'}}>
                      <img src={picture} alt={company} className="card-img-top" />
                        <div class="card-body">
                          <h3 className="card-title">{company}</h3>
                          <p className="card-text">{email}</p>
                        </div>
                    </div>

                )
              })

            }
        </div>
    </div>)
}

export default Sponsor;
