import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate, useNavigation} from "react-router-dom";
import './Header.css'
import Logo from "../../assets/images/JocontourPT2.png"


const drawerWidth = 260;
const navItems = ['Accueil', 'Agenda', 'Contact'];

function Header(props) {
    const {window} = props;
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}} className={"Box__header"}>
            <Typography variant="h6" sx={{my: 2}} className={"Title__header"}>
                JO4Live
            </Typography>
            <Divider/>
            <List className={"List__block"}>
                {navItems.map((item) => (
                    <ListItem key={item}>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item} onClick={((e) => {
                                navigate(`/${item.toLowerCase()}`)
                            })}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar component="nav" style={{
                backgroundColor: "#00004D",
                height: 80
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, mt: 1, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    {/*<AdbIcon*/}
                    {/*    sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}*/}
                    {/*/>*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: {xs: 5, md: 3},
                            ml: {xs: 9.5, md: 0},
                            mt: 0.8,
                            display: {xs: 'absolute', md: 'flex'},
                            marginLeft: 9,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <div style={{
                            width: 130,
                            marginTop: 10,
                        }}>
                            <img src={Logo} style={{width: "100%"}}/>
                        </div>
                    </Typography>

                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <Button key={item} onClick={((e) => {
                                navigate(`/${item.toLowerCase()}`)
                            })} sx={{color: '#fff', marginTop: 1.3, fontSize: 14, mr: 0.9, fontWeight: 'bold'}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, height: 'auto'},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Header.propTypes = {
    window: PropTypes.func,
};

export default Header;
