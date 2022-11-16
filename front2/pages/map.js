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

import styles from '../styles/Map.module.css'
import { minHeight } from '@mui/system';

export default function map() {
  return (
    <Container className={styles.container4}>
      <Typography className={styles.title} variant="h4" color="text.secondary" >
        Carte
      </Typography>
      <Typography className={styles.description}  variant="h6" color="text.secondary"  mb={10} ml={14}>
      Ici vous pouvez trouver les points de collect et nos partenaires.
      </Typography>
      <Container className={styles.legend}>
        <div className={styles.legend1}>
          Point de collecte
        </div>
      <TextField id="outlined-basic" value="13000" sx={{color: "#00A651"}} label="Code Postal" variant="standard" />

        <div className={styles.legend2}>
          Boutique
        </div>
      </Container>
      <Container className={styles.legend}>
        <img src='/img/map3.png' className={styles.image} />
      </Container>
    </Container>


  )
}
