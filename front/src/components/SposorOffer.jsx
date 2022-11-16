import React from 'react'
import { useState } from 'react'
import Header from './Header';
import Nageur from "../img/assets/photo-header.gif"
import { PostSponsors } from '../request/sponsors.request';
import { useNavigate } from 'react-router-dom'

const SposorOffer = () => {
    const [dataForm, setDataForm] = useState({
        image: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        about: '',
        sports: '',
    });

    const navigate = useNavigate()

    function handleSubmit() {
        // console.log(dataForm);
        PostSponsors({data:{
            name: dataForm.companyName,
            isActive: true,
            about: dataForm.about,
            email: dataForm.email,
            phone: dataForm.phone,
            sports: dataForm.sports,
            picture: dataForm.image,
            adress: dataForm.address,
        }})
        navigate('/sponsor')
    }


    return (
        <div >

            <Header />

            <div className='d-flex justify-content-between '>



            <div style={{marginTop: '120px', maxWidth: '50%', position: "absolute", opacity: '0.9'}} className="bg-white" >

                <div>
                    <label htmlFor="Picture">Logo</label>
                    <input className="formInputs" type="text" onChange={(e) => setDataForm({...dataForm, image: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="Company">Nom du Groupe</label>
                    <input className="formInputs" type="text" onChange={(e) => setDataForm({...dataForm, companyName: e.target.value})}/>
                </div>

                <div>
                    <label htmlFor="email">Adresse Mail</label>
                    <input className="formInputs" type="email" onChange={(e) => setDataForm({...dataForm, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="phone">Telephone</label>
                    <input className="formInputs" type="phone" onChange={(e) => setDataForm({...dataForm, phone: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="address">Localisation</label>
                    <input className="formInputs" type="address" onChange={(e) => setDataForm({...dataForm, address: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="sports">Sports a sponsoriser</label>
                    <input className="formInputs" type="text" onChange={(e) => setDataForm({...dataForm, sports: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="about">Description de l'offre sponsoring</label>
                    <input className="formInputs" type="text" onChange={(e) => setDataForm({...dataForm, about: e.target.value})}/>
                </div>
                <button className="btn-ghost2" type='submit' onClick={() => handleSubmit()}>Publier l'annonce</button>
            </div>
            </div>

            <div style={{backgroundImage: `url(${Nageur})`, marginTop: "120px"}} className="banner2">


            </div>
        </div>
    )
}

export default SposorOffer
