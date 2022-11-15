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
import styles from '.././../styles/Header.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
        <img src='/img/logonoir.png' alt='' className={styles.logoCodeDrawer} />
      </Typography>
      <Divider />
      <List>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}  href="/map">
              Carte <LocationOnIcon />
            </ListItemButton>
          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }} href="/shops">
              <ListItemText primary={'Partenaires'} />
            </ListItemButton>

          </ListItem>
          <ListItem  disablePadding>
            <ListItemButton sx={{  }}  href="/login">
              <ListItemText primary={'Se connecter'} />
            </ListItemButton>

          </ListItem>
      </List>
      </ThemeProvider>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const mainTheme = createTheme({
    palette: {
      primary: {
        main: '#3b9e75',
      },
    },
  });
  return (
    <ThemeProvider theme={mainTheme}>
      <Box sx={{width:80 }}>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Button href='/'>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                      <img src='/img/logoblanc.png' alt='' className={styles.logoCode} />

              </Typography>

            </Button>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, whiteSpace:'no-break' }}>
                <Button sx={{ color: '#fff', whiteSpace: "nowrap" }}  href="/map">
                Carte <LocationOnIcon />
                </Button>
                <Button sx={{ color: '#fff' }}  href="/shops">
                Partenaires
                </Button>
                <Button sx={{ color: '#fff' }} href="/login">
                <AccountCircleRoundedIcon sx={{ fontSize:40}} />
                </Button>
            </Box>
          </Toolbar>
        </AppBar>
    <ThemeProvider theme={lightTheme}>

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
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
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
