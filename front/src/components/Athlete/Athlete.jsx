import React, { useState} from "react";
import Navigation from "../Navigation";
import AthleteList from "./AthleteList";

const dataSponsor =[
    {
        "name": "blabla",
        "about": "adzeferfvdvv"
    },
    {
        "name": "cc",
        "about": "adzeferfvdvv"

    },
    {
        "name": "aa",
        "about": "adzeferfvdvv"

    },
    {
        "name": "tt",
        "about": "adzeferfvdvv"

    },

]
const Athlete = () => {

    const [dataSponsor, setDataSponsor] = useState("");
    return (
        <div>Athlete
            <Navigation />
            <div style={{display: "flex"}}>
                <div>
                 <AthleteList setDataSponsor={setDataSponsor} />
                </div>
                <div>
                    {/* <About dataSponsor={dataSponsor}  /> */}
                </div>
            </div>
        </div>
    )
}

export default Athlete;