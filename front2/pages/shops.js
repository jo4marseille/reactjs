import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {getShops} from './api/shops'
import { Container } from '@mui/system';
import styles from '../styles/Shops.module.css'

export default function shops() {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    getShops()
    .then(data => setShops(data.data))
  }, [])

  console.log(shops)

  return (
    <div>
     <Typography className={styles.title} variant="h4" color="text.secondary" >
        Boutiques Partenaires
      </Typography> 
      <Typography className={styles.description}  variant="h6" color="text.secondary"  mb={10} ml={14}>
      Nos commercants partenaires sont là pour vous servir et vous proposer des produits de qualité.
      Ici vous pouvez trouver des produits locaux, des produits bio, des produits de saison, des produits de qualité.
      <Typography fontWeight='bold'sx={{color:"#00A651"}}>Echanger vos points contre des bons d'achat, des produits, des services, des évènements, des bons plans.</Typography>
      </Typography>

      <Container sx={{ display:'flex',flexWrap: 'wrap', gap:5 , pb:10}}>

      {shops.map((shop, i) => (
        

        <Card key={i} sx={{ maxWidth: 345 , borderRadius:2}}>
          <CardMedia
            component="img"
            height="240"
            image={"https://clean-and-collect-api.jo4marseille.fr" + shop.attributes.image.data.attributes.url}
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
  )
}
