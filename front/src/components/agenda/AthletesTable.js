import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Popover, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";
import "../../assets/images/athletes/1.png"
import "../../assets/images/athletes/14.png"
import Flag from "../../assets/images/flags/france.svg"
import picture from "../../assets/images/athletes/1.png"

export default function AthletesTable(props) {

    function item() {


        return (
            <div style={{}}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "noWrap"
                }}>
                    <div style={{
                        width: "50%",
                    }}>
                        <div style={{
                            backgroundImage: `url(${picture})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            width: "90%",
                            height: 200,
                        }}/>
                    </div>


                    <div style={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <h5 style={{
                            fontSize: 18,
                            marginBottom: 0,
                            marginTop: 5,
                            textAlign: "right",
                        }}>
                            FRANCE
                        </h5>


                        <div style={{
                            marginTop: 0,

                            // marginLeft: 10,
                        }}>
                            <h4 style={{
                                fontSize: 26,
                                padding: 0,
                                marginBottom: 0,
                                marginTop: 10,
                            }}> Tom
                            </h4>

                            <h5 style={{
                                fontSize: 22,
                                padding: 0,
                                marginBottom: 0,
                                marginTop: 5,
                            }}>
                                Campagne
                            </h5>

                            <h5 style={{
                                fontSize: 22,
                                padding: 0,
                                marginBottom: 0,
                                marginTop: 15,
                            }}>
                                22 ans
                            </h5>

                        </div>
                    </div>


                </div>
                <p style={{
                    width: "95%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: -40,
                    padding: 0,
                    fontSize: 14
                }}>
                    Né le 14 novembre 2000 à Saint-Jean,Tom est un athlète français, spécialiste du saut à longueur. Il est licencié au Stade bordelais athlétisme.

                </p>

            </div>

        )
    }

    const columns = [
        {field: 'position', headerName: 'Position'},
        {
            field: 'flag', headerName: 'Country',
            renderCell: (params) => (
                <span>
            <div style={{width: 50}}>
                <img style={{width: "100%"}} src={require(`../../assets/images/flags/${params.row.flag}`)}
                     alt={"flag"}/>
            </div>
        </span>
            )
        },

    {
        field: 'lastName',
        headerName: 'Nom',
        sortable: false,
        renderCell: (params) => (
            <Tooltip title={item()} style={{
                width: 600,
                height: 200
            }}>
                <span style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {params.row.lastName}
                </span>
                </Tooltip>
            ),
        },
        {
            field: 'firstName',
            headerName: 'Prénom',
            sortable: false,
            renderCell: (params) => (

                <Tooltip title={item()} style={{
                    // width: 400,
                    height: 200
                }}>
                <span style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {params.row.firstName}
                </span>
            </Tooltip>
        ),
    },


    // position drapeau name

    ];
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);


    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={props.data.athletes}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                // checkboxSelection
            >

            </DataGrid>

        </div>
    );
}
