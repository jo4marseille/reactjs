import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
	InputAdornment,
	Typography,
	Link,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import styles from '../styles/Login.module.css'


const Login = () => {

const [values, setValues] = useState({
	email: "",
	pass: "",
	showPass: false,
});

const handlePassVisibilty = () => {
	setValues({
		...values,
		showPass: !values.showPass,
	});
};

const mainTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#00bc7d ',
          '&:hover': {
          background: '#3acf9e',

          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {

          '&:focus': {
          border: '1px solid #3acf9e',

          },
        },
      },
    },
}
});

	return (

		<ThemeProvider theme={mainTheme} >
			<Typography className={styles.title} variant="h4" color="text.secondary" >
				Connexion
			</Typography> 
		<Container
		//  maxWidth="sm"
		
			style={{ display: "flex", gap: "44px",justifyContent:'center', pt:80,alignItems: "center" , height:"67vh"}}
			>
		<img src='/img/indexIllustration22.svg' className={styles.img}/>

		<Grid
			container
			spacing={2}
			direction="column"
			justifyContent="center"
			// style={{ minHeight: "100vh" }}
		>
		<Paper elelvation={2} sx={{ padding: 5 }}>
		<form>
		<Grid container direction="column" spacing={2}>
			<Grid item>
				<TextField
					type="email"
					fullWidth
					label="Email"
					placeholder="adresse mail"
					variant="outlined"
					focused
					value="Jane.doe@gmail.com"
					required
				/>
			</Grid>

			<Grid item>
			<TextField
				type={values.showPass ? "text" : "password"}
				fullWidth
				label="Mot de passe"
				placeholder="Mot de passe"
				variant="outlined"
				value="toto"
				focused
				required
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								onClick={handlePassVisibilty}
								aria-label="toggle password"
								edge="end"
							>
								{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			</Grid>

			<Grid item>
			<Button href='/account' fullWidth variant="contained">
				Se connecter
			</Button>
			<Link sx={{mt:4}}>Pas de compte ? S'inscrire </Link>
			</Grid>
		</Grid>
		</form>
		</Paper>
		</Grid>

		</Container>
		</ThemeProvider>
	);
};

export default Login;
