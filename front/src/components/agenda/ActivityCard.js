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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

const ActivityCard = (props) => {

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
                        {props.data.name}
                    </h4>

                    <p className="hour_activity">{props.data.localTime}</p>
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
                                <ModalTable data={props.data}/>
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
                    {
                        item3 ?
                            <div className="ctn_link">
                                <a href={"https://www.google.fr/maps/place/Stade+Olympique+Yves+du+Manoir/@48.9292806,2.2455777,17z/data=!3m1!4b1!4m5!3m4!1s0x47e665da9e08e561:0x65455f9e577c366!8m2!3d48.9292771!4d2.2477717"}
                                   target={"_blank"} className="link">
                                    {/*<OpenInNewIcon style={{*/}
                                    {/*    fontSize: 22,*/}
                                    {/*    position: "relative",*/}
                                    {/*    top: +5,*/}
                                    {/*    // left: +10*/}
                                    {/*    left: -5*/}
                                    {/*}}/>*/}

                                    {props.data.location}


                                </a>
                            </div>
                            :
                            <></>
                    }
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
                                <a href={props.data.channel.link} target={"_blank"} className="link">
                                    Regarder en direct sur
                                    <div style={{
                                        width: 40,
                                        margin: 10,
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }}>
                                        <img style={{width: "100%"}}
                                             src={require(`../../assets/images/chaines-tele/${props.data.channel.logo}`)}
                                             alt=""/>
                                    </div>

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


                <div style={{
                    height: 45,
                }}>
                    <div style={{
                        // backgroundColor: "white",
                        height: 35,
                        width: 140,
                        borderRadius: 10,
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: 5,
                        marginTop: 5,
                        marginBottom: 5,
                        cursor: "pointer"

                    }}
                         class={"hover_notif"}
                    >
                        <h6 style={{
                            margin: 0,
                            padding: 0,
                            fontSize: 14,
                            color: "black",
                            paddingTop: 7
                        }}>
                            me notifier
                        </h6>
                        <NotificationAddIcon style={{
                            marginTop: 6
                        }}/>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ActivityCard;
