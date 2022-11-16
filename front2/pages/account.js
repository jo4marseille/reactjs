import React, { useEffect, useState } from 'react'
import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Card,
	InputAdornment,
	Typography,
	Link,
} from "@mui/material";
import {getShops} from './api/shops'

import { useTheme } from '@mui/material/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/Account.module.css'
import { Box } from "@mui/system";



function account() {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    getShops()
    .then(data => setShops(data.data))
  }, [])

  return (
    <div>
      <Typography className={styles.title} variant="h4" color="text.secondary" >
		    Re Bonjour, Jane !
			</Typography> 
      <Container>
      <Container className={styles.container2}>
        <div className={styles.text2}>
              Bravo ! Tu as recolté 80 jettons grâce à ton action 
        </div>
        <div className={styles.text3}>
        Le papier est l’une des matières les plus simples à recycler. 
        Le trier en le jetant dans la bonne poubelle, 
        c’est le valoriser tout en préservant nos forêts.
        </div>
      </Container>
      <Container className={styles.slider}>
                        <div class={styles.box1}>
                            <div class={styles.percent}>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle  id="html" cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div class={styles.logo}>
                                      <img  className={styles.image} src="/img/carousel/paper.svg" alt='papier'/>
                                </div>
                            </div>

                        </div>
                        <div class={styles.box2}>
                            <div class={styles.percent}>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle className={styles.glasses}  cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div class={styles.logo}>
                                   <img  className={styles.image} src="/img/carousel/glasses.svg" alt='Verre'/>
                                </div>
                            </div>
                        </div>
                        <div class={styles.box3}>
                            <div class={styles.percent}>
                                <svg>
                                    <circle cx="70" cy="70" r="70"></circle>
                                    <circle className={styles.plastic}  cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div class={styles.logo}>
                                   <img  className={styles.image} src="/img/carousel/plastic.svg" alt='Plastique'/>
                                </div>
                            </div>
                        </div>
                        {/* <div className={styles.text}>
      Papier
                                </div> */}
      </Container>
                        <Box className={styles.dots}>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                          <div className={styles.dot}></div>
                        </Box>
      </Container>
      <div className={styles.text4}>
              Vous pouvez venir les recycler dans nos boutiques partenaires suivants 
              <Button className={styles.btnBox} href="/shops"  >
              Nos boutiques partenaires
        </Button>
        </div>
      {/* <Container className={styles.container3}> */}

      {/* </Container> */}

      <Container sx={{ display:'flex',flexWrap: 'wrap', gap:5 , pb:10}}>
{shops.map((shop, i) => (
  

  <Card key={i} sx={{ maxWidth: 345 , borderRadius:2}}>
    <CardMedia
      component="img"
      height="240"
      image={"http://localhost:1337" + shop.attributes.image.data.attributes.url}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {shop.attributes.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {shop.attributes.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
))}
</Container>
    

  </div>
  );
}

export default account;