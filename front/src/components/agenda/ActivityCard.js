import React, {useState} from 'react';

import './ActivityCard.css'
import IconArrow from "../../assets/images/icon_arrow.png"
import IconArrowTop from "../../assets/images/icon_arrow_top.png"
import AthletesTable from "./AthletesTable";
import ModalTable from "./ModalTable";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MapIcon from '@mui/icons-material/Map';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

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
                            {/*{*/}
                            {/*    item1 ?*/}
                            {/*        <img src={IconArrowTop}/>*/}
                            {/*        :*/}
                            {/*        <img src={IconArrow}/>*/}
                            {/*}*/}
                            <BackupTableIcon style={{
                                width: "100%",
                                marginTop: 5,
                                color: "black"
                            }}/>
                        </div>
                    </div>

                    {
                        item1 ?
                            <div>
                                <ModalTable/>
                            </div>
                            :
                            <>
                            </>
                    }
                </div>


                <div className="div_item_incard_ctn" onClick={((e) => {
                    handleChange(setItem3, item3)
                })}
                >
                    <div className="div_line_ctn">
                        Emplacement

                        <div className="div_item_arrow">

                            {/*<ZoomOutMapIcon style={{*/}
                            {/*    width: "100%",*/}
                            {/*    marginTop: 5,*/}
                            {/*    color: "black"*/}
                            {/*}}/>*/}
                            {
                                item3 ?
                                    <KeyboardArrowUpIcon style={{
                                        width: "100%",
                                        marginTop: 5,
                                        color: "black"
                                    }}/>
                                    :
                                    <KeyboardArrowDownIcon style={{
                                        width: "100%",
                                        marginTop: 5,
                                        color: "black"
                                    }}/>
                            }

                        </div>
                    </div>
                </div>

                <div className="div_item_incard_ctn"
                >
                    <div className="div_line_ctn" onClick={((e) => {
                        handleChange(setItem2, item2)
                    })}>
                        Diffusion

                        <div className="div_item_arrow">
                            {
                                item2 ?
                                    <>
                                        <KeyboardArrowUpIcon style={{
                                            width: "100%",
                                            marginTop: 5,
                                            color: "black"
                                        }}/>
                                    </>
                                    :
                                    <KeyboardArrowDownIcon style={{
                                        width: "100%",
                                        marginTop: 5,
                                        color: "black"
                                    }}/>
                            }
                        </div>


                    </div>
                    {
                        item2 ?
                            <div className="ctn_link">
                                <a href={""} className="link">
                                    Lien1
                                </a>
                                <a href={""} className="link">
                                    Lien2
                                </a>
                                <a href={""} className="link">
                                    Lien2
                                </a>
                            </div>
                            :
                            <></>
                    }
                </div>

                <div className="div_item_incard_ctn" onClick={((e) => {
                    handleChange(setItem4, item4)
                })}
                >
                    <div className="div_line_ctn">
                        Externe
                        <div className="div_item_arrow">
                            {
                                item4 ?
                                    <KeyboardArrowUpIcon style={{
                                        width: "100%",
                                        marginTop: 5,
                                        color: "black"
                                    }}/>
                                    :
                                    <KeyboardArrowDownIcon style={{
                                        width: "100%",
                                        marginTop: 5,
                                        color: "black"
                                    }}/>
                            }
                        </div>
                    </div>
                    {
                        item4 ?
                            <div className="ctn_link">
                                <a href={""} className="link">
                                    A venir
                                </a>
                            </div>
                            :
                            <></>
                    }
                </div>


            </div>
        </div>
    );
};

export default ActivityCard;
