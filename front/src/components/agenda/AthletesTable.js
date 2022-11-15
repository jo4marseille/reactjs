import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {Popover, Tooltip} from "@mui/material";
import Typography from "@mui/material/Typography";

import ImageTest from "../../assets/images/jo.jpeg"


function item() {
    return (
        <div style={{
            textAlign: "center"
        }}>
            <div style={{
                width: 300,
                // height: 200
            }}>
                <img src={ImageTest} style={{
                    width: "50%"
                }}/>
            </div>


            <h4 style={{
                fontSize: 22,
                padding: 0,
                marginBottom: 0,
                marginTop: 15,
            }}>
                NOM Prénom
            </h4>

            <h5 style={{
                fontSize: 18,
                padding: 0,
                marginBottom: 0,
                marginTop: 15,
            }}>
                31 ans
            </h5>

            <h5 style={{
                fontSize: 18,
                marginBottom: 0,
                marginTop: 15

            }}><span>drap</span>FRANCE</h5>


            <p>
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
                // width: 400,
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
