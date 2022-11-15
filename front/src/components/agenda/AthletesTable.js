import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Popover, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";

import ImageTest from "../../assets/images/athletes/14.png"


function item() {
    return (
        <div style={{



        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "noWrap"
            }}>
                <div style={{
                    width: "50%",
                }}>
                    <div style={{
                        backgroundImage: `url(${ImageTest})`,
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
                    }}>drap
                        <br/>
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
                        }}>
                            NOM
                        </h4>

                        <h5 style={{
                            fontSize: 22,
                            padding: 0,
                            marginBottom: 0,
                            marginTop: 5,
                        }}>
                            Prénom
                        </h5>

                        <h5 style={{
                            fontSize: 22,
                            padding: 0,
                            marginBottom: 0,
                            marginTop: 15,
                        }}>
                            31 ans
                        </h5>

                    </div>
                </div>


            </div>
            <p style={{
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 0,
                padding: 0,
                fontSize: 14
            }}>
                Descriptif Descriptif Descriptif Descriptif Descriptif Descriptif Descriptif Descriptif Descriptif
                Descriptif Descriptif Descriptif
            </p>

        </div>

    )
}

const columns = [
    {field: 'id', headerName: 'Position'},

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

    {field: 'firstName', headerName: 'Nation'},


    // position drapeau name

];

const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon'},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei'},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime'},
    {id: 4, lastName: 'Stark', firstName: 'Arya'},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys'},
    {id: 6, lastName: 'Melisandre', firstName: null},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
    {id: 8, lastName: 'Frances', firstName: 'Rossini'},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey'},
];

export default function AthletesTable() {
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
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // checkboxSelection
            >

            </DataGrid>

        </div>
    );
}
