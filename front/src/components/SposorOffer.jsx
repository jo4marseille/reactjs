import React from 'react'
import { useState } from 'react'

const SposorOffer = () => {
    const [dataForm, setDataForm] = useState({
        image: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        about: '',
    });
    
    function handleSubmit() {
        console.log(dataForm);
    }
    
    
    // console.log(dataForm);
    return (
        <div>
            <div className="card">
                <div>
                    <label htmlFor="Picture">Logo</label>
                    <input className="form-control" type="text" onChange={(e) => setDataForm({...dataForm, image: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="Company">Nom du Groupe</label>
                    <input className="form-control" type="text" onChange={(e) => setDataForm({...dataForm, companyName: e.target.value})}/>
                </div>

                <div>
                    <label htmlFor="email">Adresse Mail</label>
                    <input className="form-control" type="email" onChange={(e) => setDataForm({...dataForm, email: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="phone">Telephone</label>
                    <input className="form-control" type="phone" onChange={(e) => setDataForm({...dataForm, phone: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="address">Localisation</label>
                    <input className="form-control" type="address" onChange={(e) => setDataForm({...dataForm, address: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="sports">Sports a sponsoriser</label>
                    <input className="form-control" type="text" onChange={(e) => setDataForm({...dataForm, sports: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="about">Description de l'offre sponsoring</label>
                    <input className="form-control" type="text" onChange={(e) => setDataForm({...dataForm, about: e.target.value})}/>
                </div>
                <button className="btn btn-primary" type='submit' onClick={() => handleSubmit()}>Publier l'annonce</button>
            </div>
        </div>
    )
}

export default SposorOffer