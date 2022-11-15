import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';



export default function Home() {

  const mainTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: '#00A651 ',
            '&:hover': {
            transform: 'scale(1.1)',
            transition: 'all 0.3s ease-in-out',

            },
          },
        },
      },
      // MuiContainer: {
      //   styleOverrides: {
      //     root: {
      //       margin: '0',
      // }}},
  }
  });
  return (
    <ThemeProvider theme={mainTheme}>

    <div className={styles.firstContainer}>
      <Container>
          <h1>Clean & Collect</h1>
          <h2>Fêter, recycler, c'est gagné !</h2>
          <p>
          Pendant les JO comme durant toute l'année la ville de Marseille et Clean & Collect 
            met en place des dispositifs innovant et respectueux de l'environnement. Une nouvelle 
            manière de penser l'évènement publique en préservant notre territoire et en initiant la 
            population au recyclage
          </p>
          <Button className={styles.button} sx={{borderRadius:19, textTransform: 'capitalize'}} href='about' variant="contained">En savoir plus</Button>
      </Container>
      <Container>
        <img src="/img/indexIllustration1.svg"></img>
      </Container>
    </div>
    <div className={styles.secondContainer} id="about">
        <h1>Une nouvelle façon de fêter et recycler</h1>
      <Container>
          <Container className={styles.allContainBox}>
            <Box>
              <span className={styles.headCard}>
                <span>
                  1
                </span>
                <h2>Je recherche</h2>
              </span>
              <p>
              Je cherche un conteneur autour de moi <br/>
   Après m'être inscrit, je consulte la map afin de
   localiser le point de collect le plus proche
              </p>
              <Button className={styles.btnBox}>
                Voir la carte
              </Button>
            </Box>
            <img src='/img/indexIllustration2.svg'></img>
          </Container>

          <Container className={styles.allContainBoxReverse}>
            <Box>
              <span className={styles.headCard}>
                <span>
                  2
                </span>
                <h2>Je me connecte</h2>
              </span>
              <p>
              Je m'identifie et me connecte au conteneur<br/>
   Grâce à mon smartphone le conteneur intelligent me reconnait
              </p>
              <Button className={styles.btnBox}>
                Connexion
              </Button>
            </Box>
            <img src='/img/indexIllustration22.svg'></img>
          </Container>

          <Container className={styles.allContainBox} >
            <Box>
              <span className={styles.headCardRecycle}>
                <span>
                  3
                </span>
                <h2>Je recycle</h2>
              </span>
              <p>
              Je jette mes déchets en échange de points<br/>
   Je fais attention à jeter mes déchets dans les bons compartiments

              </p>
              <Button className={styles.btnBoxRecycle}>
                Voir la carte
              </Button>
            </Box>
            <img src='/img/indexIllustration3.svg'></img>
          </Container>

          <Container className={styles.allContainBoxReverse}>
            <Box>
              <span className={styles.headCardAvantages}>
                <span >
                  4
                </span>
                <h2>Je profite</h2>
              </span>
              <p>
              Je profite de mes points<br/>
              J'échange mes points auprès d'un commerce 
              ou j'en fais don à une association Marseillaise
              </p>
              <Button className={styles.btnBoxAvantages}>
                Mes avantages
              </Button>
            </Box>
            <img src='/img/indexIllustration4.svg'></img>
          </Container>
      </Container>
  </div>
  </ThemeProvider>
  )
}
