import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '.././../styles/NavMobile.module.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import StoreIcon from '@mui/icons-material/Store';
import { useRouter } from 'next/router'

export default function BottomNav() {
    const router = useRouter()
    const path = router.pathname
    const pathname = path.substring(1)
    if(pathname === 'map'){

    }
  const [value, setValue] = path === '/' ? React.useState('home')  : React.useState(pathname)  ;

  const handleChange = (event, newValue) => {
    console.log(path)

    console.log(value)
//     switch (path)
//     {        
//         case '/':
//             setValue('home');
//         break;
//         case '/shops':
//             setValue(value);
//         break;
//         case '/map':
//             setValue(value);
//         break;

// }
    setValue(value);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} className={styles.bottomNav}>
      {/* <BottomNavigationAction
        href="/"
        // label="home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        href="/shops"
        label="Partenaires"
        value="shops"
        icon={<StoreIcon />}
      />
      <BottomNavigationAction
        href="/map"
        label="Carte"
        value="map"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        href="/account"
       label="Profil" 
       value="account" 
       icon={<AccountCircleRoundedIcon />} /> */}
    </BottomNavigation>
  );
}