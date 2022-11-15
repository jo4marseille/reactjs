import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, sportName, theme) {
    return {
        fontWeight:
            sportName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function FilterBar(props) {
    const theme = useTheme();
    const [sportName, setSportName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setSportName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        props.setFilterList(sportName)
    };

    let sportData = require('../../assets/datas/sportCategories.json');

    return (
        <div>
            <FormControl sx={{m: 2, width: "70vw", maxWidth: "500px"}}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={sportName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value.name} label={value.name}/>
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {sportData?.SportCategories?.map((sport) => (
                        <MenuItem
                            key={sport}
                            value={sport}
                            style={getStyles(sport, sportName, theme)}
                        >
                            {sport.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default FilterBar;
