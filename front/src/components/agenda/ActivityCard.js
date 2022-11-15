import React, {useState} from 'react';

import './ActivityCard.css'
import IconArrow from "../../assets/images/icon_arrow.png"
import IconArrowTop from "../../assets/images/icon_arrow_top.png"

const ActivityCard = () => {

    let [item1, setItem1] = useState(false)
    let [item2, setItem2] = useState(false)
    let [item3, setItem3] = useState(false)
    let [item4, setItem4] = useState(false)
    let [item5, setItem5] = useState(false)


    const handleChange = (setter, currentValue) => {
        if (currentValue === true) setter(false)
        else setter(true)
    }


    return (
        <div className="div_ctn_activity">
            <div className="div_item_activity">

                <div className="div_ctn_header">
                    <h4 className="title_activity">
                        Activity name
                    </h4>

                    <p className="hour_activity">10:30</p>
                </div>

                <div className="div_item_incard_ctn" onClick={((e) => {
                    handleChange(setItem1, item1)
                })}
                >
                    <div className="div_line_ctn">

                        Athlètes
                        <div className="div_item_arrow">
                            {
                                item1 ?
                                    <img src={IconArrowTop}/>
                                    :
                                    <img src={IconArrow}/>
                            }
                        </div>
                    </div>

                    {
                        item1 ?
                            <div>
                                coucou
                            </div>
                            :
                            <>
                            </>
                    }
                </div>

                <div className="div_item_incard_ctn" onClick={((e) => {
                    handleChange(setItem2, item2)
                })}
                >
                    <div className="div_line_ctn">
                        Diffusion

                        <div className="div_item_arrow">
                            <img src={IconArrow}/>
                        </div>
                    </div>
                </div>
                <div className="div_item_incard_ctn" onClick={((e) => {
                    handleChange(setItem3, item3)
                })}
                >
                    <div className="div_line_ctn">
                        Emplacement

                        <div className="div_item_arrow">
                            <img src={IconArrow}/>
                        </div>
                    </div>
                </div>

                <div className="div_item_incard_ctn" onClick={((e) => {
                    handleChange(setItem4, item4)
                })}
                >
                    <div className="div_line_ctn">
                        Externe
                        <div className="div_item_arrow">
                            <img src={IconArrow}/>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ActivityCard;
