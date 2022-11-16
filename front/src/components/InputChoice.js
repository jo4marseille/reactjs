import React, { useState, useEffect } from 'react'
const options = [
    {
        label: "Transport en commun",
        value: "soft",
    },
    {
        label: "Voiture",
        value: "hard",
    },
    {
        label: "Pied ou vélo",
        value: "clean",
    },

];

class InputChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        console.log("type Selected!!", e.target.value);
        this.setState({ type: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("type Selected!!", this.state.type);
        if(this.state.type=="soft"){
            const isOktodisplay=true;
        } else{
            const isOktodisplay=false;

        }

    }

    render() {
        return (
            <div id="App">
                <div className="select-container" style={{marginTop: '25px', marginBottom: '20px', fontFamily: "'Poppins', sans-serif"}}>
                    <form onSubmit={this.handleSubmit}>

                        <select value={this.state.type} onChange={this.handleChange} >
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        <button type="submit" >Comptabilisez vos CO2</button>
                    </form>
                    
                    <p style={{marginTop: '10px'}} >Vous avez utilisé un mode de transport {this.state.type}</p>

                </div>
            </div>
        );
    }
}

export default InputChoice;