import React from 'react'
import Nageur from "../img/assets/photo-header.gif"
import { useNavigate } from "react-router-dom";
import SearchInput from './input/Input'
import arrow from '../img/icon/arrow.png'

const Banner = () => {

  const navigate = useNavigate()

  return (

    <div className="banner" style={{backgroundImage: `url(${Nageur})`}}>

        <div className="container">


          <h1 className="projectTitle">Sports & <br></br>Athlètes</h1>

          <div className='text-start' style={{marginTop: '80px', float: "right"}}>
            <h1  onClick={() => navigate("/athlete#athlete")} className="h1 mb-2" >

            Cherchez un Sponsor</h1>
            <h1  onClick={() => navigate("/PostSponsoring")} className="h1" >  Proposez de sponsoriser</h1>
          </div>


          <SearchInput />

        </div>
    </div>
  )
}

export default Banner
