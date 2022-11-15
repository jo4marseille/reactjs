import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from '.././../styles/Header.module.css'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search'; 
import { styled, alpha } from '@mui/material/styles';
import { capitalize } from '@mui/material';

const drawerWidth = 240;
const navItems = ['La carte', 'Se Connecter', 'Nos partenaires'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2',
      },
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <ThemeProvider theme={lightTheme}>
      
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src='/img/logo.svg' alt='' className={styles.logoCodeDrawer} />
      </Typography>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}  href="#about">
              Qui sommes-nous ? <LocationOnIcon />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}  href="/login">
              Compte 
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}  href="/shops">
              Partenaire 
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}  href="/contact">
              Contact
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }} href="/map">
              <ListItemText primary={'Carte'} />
            </ListItemButton>

          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}>
              
            </ListItemButton>

          </ListItem>
          <ListItem disablePadding>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              // value={age}
              // onChange={handleChange}
              // displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="1">
               🇫🇷  Français
              </MenuItem>
              <MenuItem value="2"> 🇬🇧 English</MenuItem>
          </Select>
      </FormControl>
      </ListItem>
      </List>
      </ThemeProvider>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const mainTheme = createTheme({
    palette: {
      primary: {
        main: '#00A651',
        

      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '14px',
            '&:hover': {
              color: '#3acf9e',
              backgroundColor: '#fff',
              transform: 'scale(1.1)',
              transition: 'all 0.3s ease-in-out',
              
              },},
            
      }},
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: 'none',
          },
        },
      }}
  });
  // const Search = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   // borderRadius: theme.shape.borderRadius,
  //   // backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     borderBottom: '1px solid white',
  //   },
    
  //   marginLeft: 0,
  //   width: '30%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(1),
  //     width: 'auto',
  //   },
  // }));
  
  // const SearchIconWrapper = styled('div')(({ theme }) => ({
  //   // padding: theme.spacing(2, 0),
  //   height: '100%',
  //   top: 0,
  //   right: 10,
  //   position: 'absolute',

  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));
  
  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     paddingRight: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '50%',
  //     [theme.breakpoints.up('sm')]: {
  //       width: '0ch',
  //       '&:focus': {
  //         width: '20ch',
  //       },
  //     },
  //   },
  // }));
  
  return (
    <ThemeProvider theme={mainTheme}>
      <Button href='/' sx={{ mr: 2, display: { sm: 'none' , xs: 'flex'} }}>
        {/* <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        > */}
                <img src='/img/logo.svg' alt='' className={styles.logoCodeDrawer} />

        {/* </Typography> */}

      </Button>
      <Box sx={{minHeight:80 ,display: { xs: 'none', sm:'flex' } }}>
      <Box sx={{ display: 'flex' }} className={styles.navBar}>
        <AppBar component="nav" >
          <Toolbar>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            > */}
            <Button href='/' sx={{ mr: 2, display: { sm: 'none' } }}>
              {/* <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              > */}
                      <img src='/img/logo.svg' alt='' className={styles.logoCodeDrawer} />

              {/* </Typography> */}

            </Button>
              {/* <MenuIcon /> */}
            {/* </IconButton> */}
            <Link href='/'>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                      <img src='/img/logo.svg' alt='' className={styles.logoCode} />

              </Typography>

            </Link>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3, whiteSpace:'no-break' }}>
                <Button sx={{ color: '#fff', whiteSpace: "nowrap", textTransform:'capitalize', borderRadius:"24px" , padding:"5px 20px"}}  href="/#about">
                Qui sommes-nous ? 
                </Button>
                <Button sx={{ color: '#fff', whiteSpace: "nowrap" , textTransform:'capitalize', borderRadius:"24px", padding:"5px 20px"}}  href="/login">
                Compte 
                </Button>
                <Button sx={{ color: '#fff', textTransform:'capitalize', borderRadius:"24px", padding:"5px 20px" }}  href="/shops">
                Partenaires
                </Button>
                <Button sx={{ color: '#fff' , textTransform:'capitalize', borderRadius:"24px", padding:"5px 20px"}}  href="/contact">
                Contact
                </Button>
                {/* <Search>

                  <StyledInputBase
                    placeholder="Plastique…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color:'white', transform: "rotate(90deg)"}} />
                  </SearchIconWrapper>
                </Search> */}
                <Button sx={{ color: 'black', textTransform:'capitalize', background: "white", ml:2, padding:"5px 20px", borderRadius:'20px' }}  href="/map">
                Carte
                </Button>
            </Box>
          </Toolbar>
        </AppBar>
    <ThemeProvider theme={lightTheme}>

        <Box component="nav">
          {/* <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer> */}
        </Box>
    </ThemeProvider>

      </Box>
      </Box>

    </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
